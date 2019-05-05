const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const profilePic = require('../modules/profile.picture')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

// GET Route
router.get('/profile', (req, res) => {
    res.send(profilePic);
}); // END GET Route

module.exports = router;