import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import {TE, te} from './../services/utils.service'

import ENV_VARS from './../configurations/env.vars'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const MAX_LOGIN_ATTEMPTS = 5
const LOCK_TIME = /*2 * 60 * */60 * 1000

let UserSchema = new Schema({
    username:       {type: String},
    first_name:     {type: String},
    last_name:      {type: String},
    email:          {
        type:String,
        lowercase: true, trim: true, index: true, unique: true, sparse: true,
    },
    phone:          {type:String, lowercase:true, trim: true, index: true, unique: true, sparse: true},
    password:       {type: String},
    
    admin:          {type: Boolean, default: false},
    
    places:         [{type: ObjectId}],
    
    scopes:         [{type: String}],
    loginAttempts:  { type: Number, required: true, default: 0 },
    lockUntil:      { type: Number }
}, {timestamps: true});

UserSchema.virtual('full_name').set((name) => {
    let sp = name.split(' ');
    this.first_name = sp[0];
    this.last_name = sp[1];
}).get(function () {
    if (!this.first_name) return null;
    if (!this.last_name) return this.first_name;

    return this.first_name + ' ' + this.last_name;
});

UserSchema.virtual('isLocked').get(function() {
    return !!(this.lockUntil && this.lockUntil > Date.now());
})

UserSchema.pre('save', async function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password') || !user.isNew) return next();
    // generate a salt
    let err, salt, hash;
    
    [err, salt] = await to(bcrypt.genSalt(10));
    if (err) TE(err);

    [err, hash] = await to(bcrypt.hash(user.password, salt));
    if (err) TE(err);

    user.password = hash;
    next();
});

UserSchema.methods.comparePassword = async function (pw) {
    let err, pass;
    if(!this.password) TE('password not set');

    [err, pass] = await to(bcrypt.compare(pw, this.password));

    if (err) TE(err);

    return pass; 
}

UserSchema.methods.incLoginAttempts = async function (callback) {
    // if we have a previous lock that has expired, restart at 1
    let err, user;
    if (this.lockUntil && this.lockUntil < Date.now()) {

        [err, user] = await to(this.update({
            $set: {loginAttempts: 1},
            $unset: {lockUntil: 1}
        }))
        
        if (err) TE('lakh...');

        return user;
    }
    // otherwise we're incrementing
    var updates = {$inc: {loginAttempts: 1}};
    // lock the account if we've reached max attempts and it's not locked already
    if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        updates.$set = {lockUntil: Date.now() + LOCK_TIME};
    }

    [err, user] = await to(this.update(updates));

    if (err) TE(err)
    return user;
}

UserSchema.methods.getJWT = function () {
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return 'Bearer ' + jwt.sign({user_id: this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
}


UserSchema.methods.toWeb = function () {
    let json = this.toJSON();
    let userData = {};

    if (json.email) userData.email = json.email;
    if (json.phone) userData.phone = json.phone;
    if (json.first_name) userData.first_name = json.first_name;
    if (json.last_name) userData.last_name = json.last_name;

    return userData;
}

var reasons = UserSchema.statics.failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
};

UserSchema.statics.getAuthenticated = function (username, password, callback) {
    this.findOne({username: username}, function (err, user) {
        if (err) return callback(err);

        if (!user) return callback(null, null, reasons.NOT_FOUND);

        if (user.isLocked) {
            return user.incLoginAttempts(function (err) {
                if (err) return callback(err);

                return callback(null, null, reasons.MAX_ATTEMPTS);
            });
        }

        user.comparePassword(password, function (err, isMatch) {
            if (err) callback(err);

            if (isMatch) {
                if (!user.loginAttempts && !user.lockUntil) return callback(null, user);
                
                var updates = {
                    $set: {loginAttempts: 0},
                    $unset: {lockUntil: 1}
                };
                return user.update(updates, function(err) {
                    if (err) return callback(err);
                    return callback(null, user);
                })
            }

            user.incLoginAttempts(function (err) {
                if (err) return callback(err);

                return callback(null, null, reasons.PASSWORD_INCORRECT);
            })
        })
    })
}

export default mongoose.model('UserModel', UserSchema)