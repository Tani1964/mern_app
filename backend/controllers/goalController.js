// npm i express -async -handler (express async handler)
const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async(req,res)=>{
    res.status(200).json({'message':'Get goals'});
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
    res.status(200).json({'message':'Set goal'});
});

// @desc Update goals
// @route Put /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async(req,res)=>{
    res.status(200).json({'message':`Update goal ${req.params.id}`});
});

// @desc Delete goals
// @route delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async(req,res)=>{
    res.status(200).json({'message':`Delete goal ${req.params.id}`});
});

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
}