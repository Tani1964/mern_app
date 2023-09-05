// This is the entry point to our server
const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();

//intializing express
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`This Server is running on port: ${port}`);
});