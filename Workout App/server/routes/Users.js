// api related things go in /routes files
// here is where router.get and .post are made for the models
// bcrypt will be used to hash passwords
const express = require('express');
const router = express.Router();
const { Users } = require('../models')
const bcrypt = require("bcrypt");

//enters users into users table in db
router.post("/", async (req, res) => {
    const { username, password } = req.body;
    // 10 is the # of salt rounds
    bcrypt.hash(password, 10).then((hash) => {
        //tell user model to add user to db
        Users.create({
            username: username,
            password: hash
        });

        res.json("SUCCESS");
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({where: { username: username }});

    if(!user) res.json({error: "User Doesn't Exist"});

    bcrypt.compare(password, user.password).then((match) => {
        if(!match) res.json({error: "Wrong Username or Password"});

        res.json("You have successfully logged in");
    });
});

module.exports = router;