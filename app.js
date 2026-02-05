"use strikt";

// import packages
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/router.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// body-parser for JSON - Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router(app);


// Start the Server
const server = app.listen(port, (error) => 
{
    if(error) return console.log(`ERROR: ${error}`);
    console.log(`Server listening on Port: ${server.address().port}`);
    
});