require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const USER = require("../../model/user");

exports.secure = async function (req, res, next) {
    try {
        var token = req.headers.authorization
        if (!token)
            return res.status(401).json({ Status: false, message: "Token not found" });
            
        var decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // console.log(decode);
        
        if (!decode || !decode.id)
            return res.status(401).json({ Status: false, message: "Token not valid" });

        var checkuser = await USER.findById(decode.id)
        req.userId = decode.id
        if (!checkuser)
            return res.status(401).json({ Status: false, message: "Token not found" });

        next();
    } catch (err) {
        return res.status(500).json({ Status: false, message: 'Token is invalid' });
    }
}

exports.Login = async function (req, res, next) {
    try {
        if (!req.body.Email)
            return res.status(401).json({ Status: false, message: "please Enter Your Email" });

        const checkuser = await USER.findOne({ Email: req.body.Email });
        
        if (!checkuser)
            return res.status(404).json({ Status: false, message: "Email not register" });

        var verifypass = await bcrypt.compare(
            req.body.password,
            checkuser.password
        );

        checkuser.password= undefined
        let token = await jwt.sign({ id: checkuser._id },process.env.JWT_SECRET_KEY)
        if (verifypass) {
            return res.status(200).json({ Status: true, message: "User login Sucessfully", checkuser, token });
        } else {
            return res.status(404).json({ Status: false, message: "your Password is incorrect please insert valid password" });
        }
    } catch (err) {
        return res.status(500).json({ Status: false, message: err.message });
    }
}   

