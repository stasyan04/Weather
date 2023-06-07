const express = require('express');
const path = require('path')
require('dotenv').config();
const mongoose = require('mongoose');
const weatherRouter = require('./routes/weather.js');
const errorMiddleware = require('./middlewares/errorMiddleware.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/', weatherRouter);
app.use(errorMiddleware);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is started at ${PORT}`);
        })
    } catch(e) {
        console.error(e);
    }
}

start();