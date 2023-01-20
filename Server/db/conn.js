const mongoose = require('mongoose');

// connection creating and creating a new MongoDB Cloud
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose.connect(DB, {
    useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful..");
}).catch((err) => console.log("No Connection"));