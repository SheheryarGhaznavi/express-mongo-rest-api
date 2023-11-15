const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler( 
    async (request, response) => {
        response.status(200) .json({'message' : 'Get Goals'});
    }
);


const createGoals = asyncHandler(
    async (request, response) => {

        if ( !request.body.text ) {
            // response.status(400);
            throw new Error('Text field is required 2');
        }
        response.status(201).json({'message' : 'Create Goals'});
    }
);


const updateGoals = asyncHandler(
    async (request, response) => {
        response.status(200) .json({'message' : `Update Goals ${request.params.id}`});
    }
);


const deleteGoals = asyncHandler(
    async (request, response) => {
        response.status(200) .json({'message' : `Delete Goals ${request.params.id}`});
    }
);




module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
};