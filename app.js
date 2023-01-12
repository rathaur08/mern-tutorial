const mongoose = require('mongoose');
const express = require('express');
const app = express();

// connectio creating and creating a new MongoDB Cloud
const DB = 'mongodb+srv://sunnyrathaur:sunnyrathaur@cluster0.23gv3yf.mongodb.net/mernstack?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(DB,{
    useNewUrlParser:true, useUnifiedTopology:true, useUnifiedTopology:true
}).then(()=>{
console.log("Connection Successful..");
}).catch((err) => console.log("No Connection"))

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


app.listen(8000, () => {
    console.log(`Server is running at Port 8000`)
})

// passwords -------------->
// sunnyrathaur ,mernstack
// mongoDB connectin key ---------->
// mongodb+srv://sunnyrathaur:sunnyrathaur@cluster0.23gv3yf.mongodb.net/?retryWrites=true&w=majority

