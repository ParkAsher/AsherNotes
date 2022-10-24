const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const hpp = require("hpp");

var cookieParser = require("cookie-parser");

/* config */
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

/* Router */
app.use("/api/user", require("./server/Router/user.js"));
app.use("/api/category", require("./server/Router/category.js"));
app.use("/api/post", require("./server/Router/post.js"));


mongoose.connect(MONGO_URI).then(() => {
    console.log("MongoDB connection Success!");
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
})



