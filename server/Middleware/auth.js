const jwt = require("jsonwebtoken");

/*
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
*/

const config = require("../config/key.js");

const auth = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);

    if (!token) return next();

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        console.log(decoded);
        req.user = {
            _id: decoded._id,
            name: decoded.name,
        };

        return next();

    } catch (err) {

        return next();
    }
}

module.exports = auth;