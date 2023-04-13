const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log("Database Connection Error")
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
