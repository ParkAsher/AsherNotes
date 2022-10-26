var express = require("express");
var router = express.Router();

/* Model */
const { Counter } = require("../Model/Counter.js");
const { Post } = require("../Model/Post.js");
const { User } = require("../Model/User.js");

const setUpload = require("../Util/upload.js");

router.post("/image", setUpload("ashernotes/image"), (req, res, next) => {

    res.status(200).json({ success: true, filePath: res.req.file.location })

})

router.post("/submit", (req, res) => {

    let temp = {
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        thumbnail: req.body.thumbnail
    }

    Counter.find({ name: "counter" }).exec().then((counter) => {
        temp.postNum = counter.postNum;

        User.findOne({ userid: req.body.userid }).exec().then((userInfo) => {
            temp.author = userInfo._id;

            const newPost = new Post(temp);

            newPost.save().then(() => {

                Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
                    res.status(200).json({ success: true });
                });

            });

        });

    }).catch((err) => {
        res.status(400).json({ success: false });
    })

})

router.post("/list", (req, res) => {

    Post.find({}).populate("author").sort({ createdAt: -1 }).skip(req.body.skip).limit(6).exec().then().then((doc) => {

        res.status(200).json({ success: true, postList: doc })

    }).catch((err) => {

        res.status(400).json({ success: false })
        console.log(err);

    })

})


module.exports = router;