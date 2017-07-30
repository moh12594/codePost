const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://momoh:1962Mimou@ds129333.mlab.com:29333/codepost";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if (err) {
        console.log('Connexion Error');
    }
});

router.get('/posts', function(req, res) {
    console.log("Requesting posts");
    post.find({})
        .exec(function(err, posts) {
            if (err) {
                console.log("Error getting the posts !");
            } else {
                res.json(posts);
                console.log(posts);
            }
        });
});

module.exports = router;