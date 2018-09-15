import validator from 'validator'
const {UserModel} = require('./../models');
const {to, TE} = require('./../services/utils.service');

const getUniqueKeyFromBody = (userData) => {
    let unique_key = userData.unique_key;

    if(typeof userData.email != 'undefined') {
        unique_key = userData.email;
    } else if (typeof userData.phone != 'undefined') {
        unique_key = userData.phone;
    } else {
        unique_key = null;
    }
    return unique_key;
};

const createUser = async (userData) => {
    let auth_info, unique_key, err, user;

    auth_info = {};
    auth_info.status = 'create';

    unique_key = getUniqueKeyFromBody(userData);
    
    if (!unique_key) throw new Error('Please entre an email or a phone number');

    if (validator.isEmail(unique_key)) {
        auth_info.method = 'email';
        userData.email = unique_key;

        [err, user] = await to(UserModel.create(userData));

        if (err) TE('user already exists with that email.');

        return user;
    } else if (validator.isMobilePhone(unique_key, 'any')) {
        auth_info.method = 'phone';
        userData.phone = unique_key;

        [err, user] = await to(UserModel.create(userData));
        console.log(err);
        
        if(err) TE('user already exists with that phone number');

        return user;
    } else {
        TE('A valid email or phone number was not entered.')
    }
};

const authenticateUser = async (userData) => {
    let unique_key;
    let auth_info = {};
    auth_info.status = 'login';
    unique_key = getUniqueKeyFromBody(userData);

    if(!unique_key) TE('Please enter an email or phone number to login');


    if(!userData.password) TE('Please enter a password to login');

    let err, user;
    if (validator.isAlphanumeric(unique_key)) {
        auth_info.method='username';

        [err, user] = await to(UserModel.findOne({"username": unique_key }));
        
        if (!user) TE('Not registered');
        if(err) TE(err.message);

    } else if(validator.isEmail(unique_key)){
        auth_info.method='email';
        console.log(unique_key);

        [err, user] = await to(UserModel.findOne({"email": unique_key}));
        
        if (!user) TE('Not registered');
        if(err) TE(err.message);

    }else if(validator.isMobilePhone(unique_key, 'any')){//checks if only phone number was sent
        auth_info.method='phone';

        [err, user] = await to(UserModel.findOne({"phone": unique_key}));
        if(err) TE(err.message);

    }else{
        TE('A valid email or phone number was not entered');
    }

    if (user.isLocked) {
        [err] = await to(user.incLoginAttempts());
        if (err) TE(err);

        TE('Max attempts: ' + user.lockUntil)
    };

    [err, pass] = await to(user.comparePassword(userData.password));

    if(err) TE(err.message);

    if (pass) {
        if (!user.loginAttempts && !user.lockUntil) return user;

        var updates = {
            $set: {loginAttempts: 0},
            $unset: {lockUntil: 1}
        };
        [err, up] = await to(user.update(updates));
        if (err) TE(err);
        return user;
    }

    [err] = await to(user.incLoginAttempts())
    if (err) TE(err);
    TE('Invalid password');

    // return user;
};

export {createUser, authenticateUser}

