const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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
        }if (password != cpassword) {
            return res.status(422).json({ error: "Password Are Not Matching.." })
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
        // bcrypt hasing the password
        await user.save();
        res.status(201).json({ message: "User Registerd Successfully" });  
        }
        
    } catch (err) {
        console.log(err);
    }
});

// Login route
router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({message:"awesome"});

    try {
        let token;
        const {email, password } = req.body;
        if (!email || !password) {
            return req.status(404).json({error:"plz Filled the data"});
        }
        const userLogin = await User.findOne({email: email});
        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // Json Web Token
            token = await userLogin.generateAuthToken();
            // console.log(token);
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

        if (!isMatch) {
            res.status(400).json({err:"User Error pass"})
        } else {
            res.json({message:"User Signin Successfully.."}); 
        } 
        } else {
            res.status(400).json({err:"User Invalid Error"})
        }
    } catch (err) {
        console.log(err);
        
    }
});

router.get('/about', middleware, (req, res) => {
    console.log(`Hello my About`);
    res.send(`Hello About world from the server`);
});

router.get('/contact', (req, res) => {
    res.cookie("Test", 'sunny');
    res.send(`Hello Contact world from the server`);
});

router.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

router.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

module.exports = router;