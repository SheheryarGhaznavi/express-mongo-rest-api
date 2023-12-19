const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");


const register = asyncHandler( async (request, response) => {
    response.json({message : 'Register User'});
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