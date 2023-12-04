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
            response.status(400);
            throw new Error('Text field is required 2');
        }

        const goal = await GoalModel.create({
            text: request.body.text
        });
        response.status(201).json({'message' : 'Create Goals', 'data' : goal});
    }
);


const updateGoals = asyncHandler(
    async (request, response) => {

        const goal = await GoalModel.findById(request.params.id);

        if (!goal) {
            
            response.status(400);
            throw new Error('Goal not found against this id');
        }

        if ( !request.body.text ) {
            response.status(400);
            throw new Error('Text field is required');
        }

        const updated_goal = await GoalModel.findByIdAndUpdate(request.params.id, {
            text: request.body.text
        }, { new : true });

        response.status(200) .json({'message' : `Update Goals ${request.params.id}`, 'data' : updated_goal});
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