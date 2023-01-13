const dotenv = require('dotenv');
const express = require('express');
const app = express();

//  ADD .env file path
dotenv.config({path: './config.env'});
require("./db/conn");

// PORT Path
const PORT = process.env.PORT;


// Middelware 
const middleware = (req,res, next) => {
    console.log(`Hello my Middleware`);
    next();
}

app.get('/', (req, res) =>{
    res.send("Hello from the home page");
})

app.get('/about', middleware, (req, res) => {
    console.log(`Hello my About`);
    res.send(`Hello About world from the server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});


app.listen(PORT, () => {
    console.log(`Server is running at Port http://localhost:${PORT}`)
})

// passwords -------------->
// sunnyrathaur ,mernstack
// mongoDB connection key ---------->
// mongodb+srv://sunnyrathaur:sunnyrathaur@cluster0.23gv3yf.mongodb.net/?retryWrites=true&w=majority

