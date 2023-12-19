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
        }});

    } else {

        response.status(400);
        throw new Error("Invalid User data");
    }
});

const login = asyncHandler( async (request, response) => {
    response.json({message : 'Login User'});
});

const get = asyncHandler( async (request, response) => {
    response.json({'message' : 'Get User'});
});

module.exports = { 
    register,
    login,
    get
};