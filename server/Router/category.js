var express = require("express");
var router = express.Router();

/* Model */
const { Category } = require("../Model/Category")

router.post("/list", (req, res) => {

    Category.find({}).exec().then((doc) => {
        res.status(200).json({ success: true, CategoryList: doc });
    }).catch((err) => {
        res.status(400).json({ success: false });
    })
})

module.exports = router;