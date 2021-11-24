// api related things go in /routes files
// here is where router.get and .post are made for the models
const express = require('express');
const router = express.Router();
const { workouts } = require('../models')

//request, response (can use res.json to return json)
//get request gets a list of all rows (posts) in db
router.get("/", async (req, res) => {
    // res.json("Hello Worldxxx!");
    // use await whenever you use the sequelize function 
    const listOfPosts = await workouts.findAll();
    res.json(listOfPosts);

});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const post = await workouts.findByPk(id);
    res.json(post);
});

//creates a row (post) in db
router.post("/", async (req, res) => {
    //can access details using EX: post.title, post.postText
    //will add 'post' to the database, await is used to make sure data is inserted into db before it is used
    const post = req.body
    await workouts.create(post);
    res.json(post);

});

module.exports = router;