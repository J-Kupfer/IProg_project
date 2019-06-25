
const mongoose = require('mongoose');
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');


//User Model laden
const User = require('../models/Users');

//export
module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'name', passwordField: 'password' }, function(username,password, done) {
        // Match user
        User.findOne({name: username}).then(user => {
            if (!user) {
                return done(null, false, { message: 'That email is not registered' });
            } 
            //Match encrypted password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.log(err);
                }
                if (isMatch){
                    return done (null, user);
                } else {
                    return done (null, false, { message: 'Password incorrect'});
                }
            })
            /*
            // Match password
            User.findOne({password: password}).then(user =>{
                if(password) {
                    return done(null, user);
                } else {
                    return done(null,false, {message: 'Inkorrektes Passwort'});
                }
            });
            */
          });
        })
    );
  
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err,user) {
            done(err, user);
        });
    });
};
