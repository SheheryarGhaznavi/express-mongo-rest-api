class GoalAdvancedController {

    constructor() {
        this.number = 3;


        this.myClass = new MyClass();
    }
    
    responseFormat() {
        console.log('okj');
    }
    
    getGoals = (request, response) => {
        
        
        
        this.myClass.runMyTest();
        console.log(this);
        this.responseFormat();
        response.status(200).json({'message' : 'Get Goals'});
    }

    createGoals(request, response) {
        response.status(201).json({'message' : 'Create Goals'});
    }

    updateGoals(request, response) {
        response.status(200).json({'message' : `Update Goals ${request.params.id}`});
    }

    deleteGoals(request, response) {
        response.status(200).json({'message' : `Delete Goals ${request.params.id}`});
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



module.exports = new GoalAdvancedController();