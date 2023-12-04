const asyncHandler = require('express-async-handler');
const GoalModel = require('../models/GoalModel');

const getGoals = asyncHandler( 
    async (request, response) => {

        const goals = await GoalModel.find();
        response.status(200).json(goals);
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