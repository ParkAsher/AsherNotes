const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postNum: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    }
}, { collection: "post", timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };