const express = require('express');
const GoalRoutes = express.Router();




GoalRoutes.get(
    '/',
    (request, response) => {
        response
        .status(500)
        .json({'message' : 'Get Goals'});
    }
);

GoalRoutes.post(
    '/',
    (request, response) => {
        response
        .status(201)
        .json({'message' : 'Set Goals'});
    }
);

GoalRoutes.put(
    '/:id',
    (request, response) => {
        response
        .status(200)
        .json({'message' : 'Update Goals'});
    }
);

GoalRoutes.delete(
    '/:id',
    (request, response) => {
        response
        .status(200)
        .json({'message' : 'Delete Goals'});
    }
);






module.exports = GoalRoutes;