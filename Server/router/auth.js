const express = require('express');
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

// Middelware 
const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);
    next();
}

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

// Using Async / await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email Already Exists.." })
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        await user.save();
        res.status(201).json({ message: "User Registerd Successfully" });
    } catch (err) {
        console.log(err);
    }
});

router.get('/about', middleware, (req, res) => {
    console.log(`Hello my About`);
    res.send(`Hello About world from the server`);
});

router.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

router.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

router.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

module.exports = router;