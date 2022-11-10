const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const colors = require("colors");

app.use(cors())
app.use(express.json())

const usersRoute = require('./v1/Routes/users.route')
const instructorsRoute = require('./v1/Routes/instructors.route')




app.use('/api/v1/users',usersRoute)
app.use('/api/v1/instructors',instructorsRoute)



app.get("/", (req, res) => {
    try {
        res.send("Welcome to knowledge dot server")
    } catch (error) {
       console.log(error.message) 
    }
});
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;