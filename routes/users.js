const express = require('express');
const router = express.Router();
const Post = require('../models/Users');
const passport = require('passport');
const bcrypt = require('bcryptjs');

router.get('/login', (req,res) => res.send('Login'));
router.get('/register', (req,res) => res.send('Register'));

//Register User Handle
router.post('/register', async (req, res) => {

    const post = new Post({
        name: req.body.name,
        password: req.body.password,
    });
    //Hash password
    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(req.body.password, salt, async (err, hash) => {
        if (err) {
            console.log(err);
        };
        //Set password
        post.password = hash;
        try {
            console.log(req.body);
            const savedPost = await post.save()
            res.json(savedPost);
        } catch (err) {
            res.json({message: err})
        }
    }))
        
});

//Login Handle
router.post('/login', passport.authenticate('local',{
        successRedirect: '/bountyboard',
        failureRedirect: '/',
        failureFlash: true
}));

//Logout handle
router.get('/logout', (req,res) =>{
    req.logout();
    res.redirect('/');
});
const User = require('./../models/Posts');
router.get('/getall', (req,res) => {
    //Where User is you mongoose user model
    User.find({} , (err, users) => {
        if(err) //do something...
            console.log(err);
        users.map(user => {
            //Do somethign with the user
            console.log(user);
        })
    })
});
module.exports = router;