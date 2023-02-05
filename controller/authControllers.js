const userModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
// const midddlewares = require("./middlewares");
const authController = {
    signUp: async (req, res) => {
        const { name, email, password, mobileNumber } = req.body;
        if (!name || !email || !password || !mobileNumber) {
            res.send("required fields are missing")
            return;
        }
        // console.log(password);
        const hashpassword = await bcrypt.hash(password, 10)
        const objToSend = {
            name,
            email,
            password: hashpassword,
            mobile_Number: mobileNumber
        }
    
        userModel.findOne({ email }, (err, user) => {
            if (err) {
                res.json({
                    msg: "Something went Wrong"
                })
    
            } else {
                // console.log(user.password, "User");
                if (user) {
                    res.json({
                        msg: "email is already exist"
                    })
                }
                else {
                    userModel.create(objToSend, (err, data) => {
                        if (err) {
                            res.json({
                                msg: "something went wrong"
                            })
                        } else {
                            res.json({
                                msg: "user signup successfully",
                                data,
                                status: true
                            })
                        }
                    })
                }
            }
        })
    
    },
    logIn : async (req, res) => {

        const { email, password } = req.body;
        if (!email || !password) {
            res.send("required fields are missing")
            return;
        }
    
    
        userModel.findOne({ email }, async (err, user) => {
            if (err) {
                res.json({
                    msg: "something went wrong"
                })
            } else {
                if (user) {
                    const isPasswordMatch = await bcrypt.compare(password, user.password)
                    console.log(isPasswordMatch, "isPasswordMatch");
                    if (isPasswordMatch) {
                        const tokenObj = {
                            ...user
                        }
                        const token = jwt.sign(tokenObj, "shayan")
                        console.log(token);
                        res.json({
                            msg: "user successfully login",
                            data: user,
                            status: true,
                            token
                        })
    
                    }
                    else {
                        res.json({
                            msg: "credential error!"
                        })
                    }
                } else {
                    res.json({
                        msg: "credential error!"
                    })
                }
            }
        })
    },
    // check:(req , res)=>{
    //     res.send("API HIT.....")
    
    // }
}

module.exports = authController