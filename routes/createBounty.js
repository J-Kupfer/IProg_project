const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const {ensureAuthenticated} = require('./../config/auth');

router.get('/', (req,res) => {
    res.render('createBounty');
});


//Register new Bounty
router.post('/createNew', async (req, res) => {

    const post = new Post({
        name: req.body.name,
        nickname: req.body.nickname,
        crime: req.body.crime,
        bounty: req.body.bounty
    });
    
    try {
        console.log(req.body);
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({message: err})
    }
    res.render('bountyboard'); 
});



module.exports = router;