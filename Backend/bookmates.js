//jshint esversion:6
require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();

const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

//Import Routes
const authRoute = require ('./routes/auth');
const userActivityRoute = require ('./routes/userActivity')
const reviewRoute = require ('./routes/reviews');
const bookRoute = require ('./routes/books');

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
() => console.log("Connected to database"));

//Middleware
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Routes Prefixes
app.use('/api/auth', authRoute);
app.use('/api/user', userActivityRoute);
app.use('/api/review', reviewRoute);
app.use('/api/book', bookRoute);
app.use(cors);


app.listen(3000, () => console.log('Listening on port: 3000'));