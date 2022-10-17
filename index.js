const express = require("express");
const mongoose = require("mongoose");

const helmet = require("helmet");
const hpp = require("hpp");

/* config */
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* Router */
app.use("/api/user", require("./server/Router/user.js"));

mongoose.connect(MONGO_URI).then(() => {
    console.log("MongoDB connection Success!");
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
})



