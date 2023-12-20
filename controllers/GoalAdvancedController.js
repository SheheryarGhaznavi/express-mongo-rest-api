const GoalModel = require('../models/GoalModel');
const BaseController = require('./BaseController');

class GoalAdvancedController extends BaseController {
    
    async get(request, response)
    {
        const goals = await GoalModel.find({ user : request.user.id});
        response.status(200).json({'message' : 'Get Goals', 'data' : goals});
    }

    async create(request, response)
    {
        if ( !request.body.text ) {
            response.status(400);
            throw new Error('Text field is required 2');
        }

        const goal = await GoalModel.create({
            user: request.user.id,
            text: request.body.text
        });
        response.status(201).json({'message' : 'Create Goals', 'data' : goal});
    }

    async update(request, response)
    {
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

    async delete(request, response)
    {
        const goal = await GoalModel.findById(request.params.id);

        if (!goal) {
            
            response.status(400);
            throw new Error('Goal not found against this id');
        }

        await goal.deleteOne();

        response.status(200) .json({'message' : `Delete Goals ${request.params.id}`});
    }
}



module.exports = new GoalAdvancedController;