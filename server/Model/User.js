const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { collection: "user" })

const User = mongoose.model("User", userSchema);

module.exports = { User };