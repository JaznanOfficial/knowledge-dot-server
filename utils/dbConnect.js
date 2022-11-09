const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const colors = require("colors")

const dbConnect = () => {
    mongoose.connect(process.env.mongodbAtlas, {
        dbName:"knowledge-dot"
    })
        .then(() => {
        console.log(`db connected succesfully`.white.bgGreen.bold)
        }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = dbConnect;