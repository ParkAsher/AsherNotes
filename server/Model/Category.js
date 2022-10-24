const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
    }
}, { collection: "category" });

const Category = mongoose.model("Category", categorySchema);

module.exports = { Category };