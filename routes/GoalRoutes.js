const express = require('express');
const GoalRoutes = express.Router();
// const { getGoals, createGoals, updateGoals, deleteGoals } = require('../controllers/GoalController');
const { callFunction } = require('../controllers/GoalAdvancedController');

GoalRoutes.route('/')

    // Get goals
    .get(callFunction('get'))

    // Create goals
    .post(callFunction('create'));



GoalRoutes.route('/:id')

    // Update goals
    .put(callFunction('update'))

    // Delete goals
    .delete(callFunction('delete'));


module.exports = GoalRoutes;