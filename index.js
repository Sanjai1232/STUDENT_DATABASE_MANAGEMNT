const express = require('express');
const app = express();
const path = require('path');
const route= require('./Routes/routes');
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});
const database=require('./env/connectdata');
const cors=require('cors');
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname,'Public')));
app.use(route)

database();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});