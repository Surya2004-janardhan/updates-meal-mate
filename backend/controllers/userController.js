import userModel from "../models/userModel.js";
// import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import validator from "validator";
// import { validationResult } from "express-validator";

// LOGIN USER

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await userModel.findOne({
            email : email
        }); 
        console.log(user)// check if user exists
        if (!user) {
            return res.json({
                success: false,
                message: "User not found",
            });
        }
        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid credentials",
            }); 
        }
        const token = createtoken(user._id);
        res.json({ success: true, message: "User logged in successfully",token:token });
    
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err });
    }
}

// create jwt token
const createtoken = (id) =>{
    return jwt.sign({id},"1234",{
        expiresIn: "30d"
    })
}

const registerUser = async (req, res) => {  
    const {name,password,email} = req.body;
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.json({ success: false, message: errors.array() });
    // }
    // const { name, email, password } = req.body;
    try {
        let user = await userModel.findOne({
            email,
        });
        if (user) {
            return res.json({
                success: false,
                message: "User already exists",
            });
        }
        if(!validator.isEmail(email)){
            return res.json({
                success: false,
                message: "Invalid email",
            });
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters",
            });
        }
        // create new user
        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        
        // res.json({ success: true, message: "User registered successfully" });
        const newuser = new userModel({
            name:name,
            email:email,
            password:hashedpassword
        });
        const createduser = await newuser.save();
        const token = createtoken(createduser._id);
        res.json({ success: true, message: "User registered successfully",token:token });
        
    } catch (err) {
        console.error(err.message);
        res.json({ success: false, message: err.message });
    }
};

export { loginUser, registerUser };

