var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* Model */
const { User } = require("../Model/User");

/* middleware */
const auth = require("../Middleware/auth");

// token check
router.post("/check", auth, async (req, res) => {

    const { user } = req;

    if (!user) {
        return res.status(400).json({ success: false, msg: "TOKEN_NOT_VERIFIED" });
    }

    res.status(200).json({ user: user, success: true, msg: "LOGINED" });

})


// register
router.post("/register", (req, res) => {

    const { name, userid, password } = req.body;

    if (!name || !userid || !password) {
        return res.status(400).json({ success: false, msg: "모든 필드를 채워주세요." });
    }

    // 이미 가입된 유저가 있는지 id로 찾는다.
    User.findOne({ userid }).then((findUser) => {

        // 가입된 유저가 있다면?
        if (findUser) return res.status(400).json({ success: false, msg: "이미 가입된 아이디입니다." });

        const newUser = new User({ name, userid, password });

        // 암호화
        bcrypt.genSalt(10, (err, salt) => {

            bcrypt.hash(newUser.password, salt, (err, hash) => {

                if (err) throw err;

                newUser.password = hash;
                newUser.save().then(() => {

                    res.status(200).json({ success: true, msg: "회원가입 성공!" });

                })

            })

        })

    })

})


// login
router.post("/login", (req, res) => {

    const { userid, password } = req.body;

    if (!userid || !password) {
        return res.status(400).json({ success: false, msg: "모든 필드를 채워주세요." });
    }

    User.findOne({ userid }).then((findUser) => {

        // 유저가 없다면?
        if (!findUser) return res.status(400).json({ success: false, msg: "유저가 존재하지 않습니다." });

        // 있다면 패스워드 검증
        bcrypt.compare(password, findUser.password).then((isMatch) => {

            // 비밀번호가 일치하지않는다면?
            if (!isMatch) return res.status(400).json({ success: false, msg: "비밀번호가 일치하지 않습니다." });

            // 일치한다면? 토큰발급. 쿠키에 저장.
            const token = jwt.sign(

                {
                    _id: findUser._id,
                    name: findUser.name,
                },
                process.env.JWT_SECRET,
                { expiresIn: '2m' }

            );

            res.cookie('access_token', token, {
                maxAge: 1000 * 60 * 2,
                httpOnly: true,
            })

            res.status(200).json({
                token: token,
                success: true,
                user: {
                    _id: findUser._id,
                    name: findUser.name,
                    userid: findUser.userid,
                },
                msg: "로그인 성공!"
            })

        })

    })

})

// logout
router.post("/logout", (req, res) => {

    res.clearCookie("access_token");
    res.status(200).json({ success: true })
})


module.exports = router;