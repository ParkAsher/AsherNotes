const express = require("express");
const mongoose = require("mongoose");

const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");

/* config */
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());
app.use(hpp());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
})

