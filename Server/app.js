const dotenv = require('dotenv');
const express = require('express');
const app = express();

//  ADD .env file path
dotenv.config({ path: './config.env' });

require("./db/conn");
const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

// PORT Path
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running at Port http://localhost:${PORT}`)
})