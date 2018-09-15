import passport from 'passport'
import { Strategy as  LocalStrategy} from "passport-local"
import {ExtractJwt, Strategy} from 'passport-jwt'
import validator from 'validator'
import {to, ReS, ReE} from './../services/utils.service'

import {UserModel} from './../models'

import ENV_VARS from './../configurations/env.vars'

passport.use(new LocalStrategy({
    usernameField: 'unique_key',
    passwordField: 'password',
  }, async (unique_key, password, done) => {
    let auth_info = {};
    auth_info.status = 'login';
  
    if(!unique_key)
    return done(null, false, { message: 'Please enter an email or a phone number to login' });
    
    if(!password)
    done(null, false, { message: 'Please enter a password to login'});
  
    let err, user, pass;
    if(validator.isEmail(unique_key)){
      auth_info.method = 'email';
      console.log(unique_key);
  
      [err, user] = await to(UserModel.findOne({"email": unique_key}));
      if(err) return done(err);
      
      if (!user) return done(null, false, { message: 'Incorrect email.' });
    } else if (validator.isMobilePhone(unique_key, 'any')){//checks if only phone number was sent
        auth_info.method = 'phone';
  
        [err, user] = await to(UserModel.findOne({"phone": unique_key}));
        if(err) done(err);
        if (!user) return done(null, false, { message: 'Incorrect phone number.' });
    } else {
      return done(null, false, { message: 'Invalid email or phone number.' });
    }
  
    if (user.isLocked) {
      [err] = await to(user.incLoginAttempts());
      if (err) TE(err);
  
      return done(null, false, { message: 'Max attempts: ' + user.lockUntil });
    };
  
    [err, pass] = await to(user.comparePassword(password));
  
    if(err) done(err);
  
    if (pass) {
        if (!user.loginAttempts && !user.lockUntil) return done(null, user);
  
        var updates = {
          $set: {loginAttempts: 0},
          $unset: {lockUntil: 1}
        };
          
        [err, up] = await to(user.update(updates));
        if (err) return done(err);
        return done(null, user);
    }
  
    user.incLoginAttempts();
    return done(null, false, { message: 'Incorrect password.' });
    }
  ));
  
  
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = ENV_VARS.jwt_encryption;
  
  passport.use(new Strategy(opts, async function(jwt_payload, done){
      let err, user;
      [err, user] = await to(UserModel.findById(jwt_payload.user_id));
      if(err) return done(err, false);
      if(user) {
          return done(null, user);
      }else{
          return done(null, false);
      }
  }));
  
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err, user) {
      done(err, user);
    });
  });
  
 export default (app) => {  
    // Passport init
    app.use(passport.initialize());
    app.use(passport.session());
    console.log('passport loaded...');
    // return app;
  }
  