const express = require('express');
const router = express.Router();
const Post = require('../models/Users');

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

module.exports = router;