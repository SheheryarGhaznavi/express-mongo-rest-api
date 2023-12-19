const GoalModel = require('../models/GoalModel');
const asyncHandler = require('express-async-handler');


class GoalAdvancedController {

    constructor() {

        this.number = 3;
    }
    
    responseFormat() {
        console.log('okj');
    }


    
    // getGoals = (request, response) => {
    //     this.myClass.runMyTest();
    //     console.log(this);
    //     this.responseFormat();
    //     response.status(200).json({'message' : 'Get Goals'});
    // }
    
    async get(request, response)
    {

        const class_name2 = 'MyClass';
        const myClass = new lib["MyClass"];
        myClass.runMyTest();

        const goals = await GoalModel.find();
        response.status(200).json({'message' : 'Get Goals', 'data' : goals});
    }

    async create(request, response)
    {
        if ( !request.body.text ) {
            response.status(400);
            throw new Error('Text field is required 2');
        }

        const goal = await GoalModel.create({
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


class MyClass {

    myTest() {
      console.log('it works');
    }

    runMyTest() {
      this.myTest();
    }

}

const class_instance = new GoalAdvancedController();


const callFunction = (function_name, class_name) => {
    
    console.log(this);
    console.log(class_name);
    console.log(function_name);
    const advanced = new GoalAdvancedController();
    return asyncHandler(class_instance[function_name]);
}

module.exports = callFunction;