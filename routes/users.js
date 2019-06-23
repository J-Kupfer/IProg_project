const express = require('express');
const router = express.Router();
const Post = require('../models/Users');
const passport = require('passport');

router.get('/login', (req,res) => res.send('Login'));
router.get('/register', (req,res) => res.send('Register'));

//Register User Handle
router.post('/register', async (req, res) => {

    const post = new Post({
        name: req.body.name,
        password: req.body.password,
    });
    
    try {
        console.log(req.body);
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({message: err})
    }
        
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

router.get('/getall', (req,res) => {
    User.find({}, function(err, docs) {
        if (!err){ 
            console.log(docs);
            process.exit();
        } else {throw err;}
    });
})
module.exports = router;