const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.set("strictQuery", false);
    
    mongoose.connect(process.env.DBCON, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Succesfull contection to database');
        })
        .catch((err) => {
            console.log(err);
            throw new Error('Error initializing database')
        })
}

module.exports = { dbConnection }