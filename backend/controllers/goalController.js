// npm i express -async -handler (express async handler)
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel');

// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async(req,res)=>{
const goals = await Goal.find();


    res.status(200).json(goals);
});

// @desc Set goal
// @route Post /api/goals
// @access Private
const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        // res.status(500).json({message: 'Please add a text field'});
        // Using express error handler
        res.status(400)
        throw new Error('Please add a text field');
    }

    const goal = await Goal.create({
        text: req.body.text
    });

    res.status(200).json(goal);
});

// @desc Update goals
// @route Put /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body , {
        new: true,
    })

    res.status(200).json(updatedGoal);
});

// @desc Delete goals
// @route delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    
    await goal.deleteOne()

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
}