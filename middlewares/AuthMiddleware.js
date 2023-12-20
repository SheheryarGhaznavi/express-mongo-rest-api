const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const UserModel = require('../models/UserModel');


const protect = asyncHandler(
    async (request, response, next) => {

        let token;

        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
            
            try {
                
                /// Get token from header
                token = request.headers.authorization.split(' ')[1];

                /// Verify token
                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                /// Get user from token
                request.user = await UserModel.findById(decoded.id).select('-password');

                next();

            } catch (error) {
                
                console.log(error);
                response.status(400);
                throw new Error('Not authorized');
            }
        }

        if (!token) {
            response.status(401);
            throw new Error('Not authorized, no token');
        }
    }
)

module.exports = protect; 