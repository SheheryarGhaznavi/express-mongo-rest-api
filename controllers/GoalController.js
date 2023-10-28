const getGoals = (request, response) => {
    response .status(200) .json({'message' : 'Get Goals'});
};


const createGoals = (request, response) => {
    response.status(201).json({'message' : 'Create Goals'});
};


const updateGoals = (request, response) => {
    response .status(200) .json({'message' : `Update Goals ${request.params.id}`});
};


const deleteGoals = (request, response) => {
    response .status(200) .json({'message' : `Delete Goals ${request.params.id}`});
};




module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
};