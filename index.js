const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const hpp = require("hpp");
const path = require("path");

const port = process.env.PORT || 5000

var cookieParser = require("cookie-parser");

/* config */
const config = require("./server/config/key.js");

const app = express();

app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "./client/build")));

/* Router */
app.use("/api/user", require("./server/Router/user.js"));
app.use("/api/category", require("./server/Router/category.js"));
app.use("/api/post", require("./server/Router/post.js"));


mongoose.connect(config.MONGO_URI).then(() => {
    console.log("MongoDB connection Success!");
}).catch((err) => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`App listening on Port ${port}`);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index/html"));
})



