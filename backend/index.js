//Frameworks
const express = require('express');
const cors = require('cors');
require('dotenv').config()

//Import database
const { dbConnection } = require('./database/configdb')

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Backend running on PORT: ${process.env.PORT}`);
})
