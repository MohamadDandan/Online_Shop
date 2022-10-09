const express = require('express');
const app = express()
const db = require('./models')
const cors = require("cors")
app.use(express.json())
app.use(cors())

const postRoute = require('./routes/Posts')
const Pro_Cat_Route = require('./routes/ProductCategory')
const Comment_Route = require('./routes/Comment')
const UserType = require('./routes/UserTypes')
const User = require('./routes/User')
const likes = require('./routes/Likes')
const order = require('./routes/ordera')
const Abs = require('./routes/Abs')
const Absr = require('./routes/Absr')



app.use("/posts", postRoute)
app.use("/Pro_Cat_Route", Pro_Cat_Route)
app.use("/Comment", Comment_Route)
app.use("/UserTypes", UserType)
app.use("/User", User)
app.use("/like", likes)
app.use("/ordera", order)
app.use("/Abs", Abs)
app.use("/Absr", Absr)


db.sequelize.sync().then((err) => {
    app.listen(3001, () => {
        console.log("3001")


    });
});