require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const cors = require('cors')

app.use(cors())

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, 3001, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./Routes/routes.js');
app.use('/api', routes)


process.on('SIGINT', function() {
    process.exit();
})