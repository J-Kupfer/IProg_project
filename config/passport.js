const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');


//User Model laden
const User = require('./../models/Users');


//export
module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'name' }, (name,password, done) => {
        // Match user
        console.log('name');
        console.log('password');
        User.findOne({name: name}).then(user => {
            if (!user) {
                return done(null, false, { message: 'That email is not registered' });
            } 
            // Match password
            User.findOne({password: password}).then(user =>{
                if(password) {
                    return done(null, user);
                } else {
                    return done(null,false, {message: 'Inkorrektes Passwort'});
                }
            });
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
