const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");


const register = asyncHandler( async (request, response) => {

    const { name, email, password } = request.body;

    if (!name || !email || !password) {
        response.status(400);
        throw new Error('Please add all fields'); 
    }

    /// Checking that email exists or not
    const user_exists = await UserModel.findOne({email});

    if (user_exists) {
        response.status(400);
        throw new Error('User already exists'); 
    }


    /// Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);


    /// Creating User
    const user = await UserModel.create({
        name,
        email,
        password : hash_password,
    });

    if (user) {
        
        response.status(200);
        response.json({message : 'User Created', data : {
            _id : user.id,
            name : user.name,
            email : user.email,
            token : generateToken(user._id)
        }});

    } else {

        response.status(400);
        throw new Error("Invalid User data");
    }
});

const login = asyncHandler( async (request, response) => {

    const { email, password } = request.body;

    if (!email || !password) {
        response.status(400);
        throw new Error('Please add all fields'); 
    }

    /// Checking that email exists or not
    const user = await UserModel.findOne({email});

    if (!user) {
        response.status(400);
        throw new Error('User not exists'); 
    }


    /// Comparing Password
    if (bcrypt.compare(password, user.password)) {

        response.status(200);
        response.json({message : 'User Login Successfully', data : {
            _id : user.id,
            name : user.name,
            email : user.email,
            token : generateToken(user._id)
        }});

    } else {

        response.status(400);
        throw new Error('Invalid Password');         
    }
});

const get = asyncHandler( async (request, response) => {

    response.status(200);
    response.json({'message' : 'Get User', 'data' : request.user});
});

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn : '60d' });
}

module.exports = { 
    register,
    login,
    get
};