const express = require('express');
const GoalRoutes = express.Router();
const { getGoals, createGoals, updateGoals, deleteGoals } = require('../controllers/GoalController');
// const { getGoals, createGoals, updateGoals, deleteGoals } = require('../controllers/GoalAdvancedController');

GoalRoutes.route('/')

    // Get goals
    .get(getGoals)

    // Create goals
    .post(createGoals);



GoalRoutes.route('/:id')

    // Update goals
    .put(updateGoals)

    // Delete goals
    .delete(deleteGoals);


module.exports = GoalRoutes;