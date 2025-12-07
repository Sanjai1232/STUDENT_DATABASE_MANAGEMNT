const e = require('express');
const mongoose=require('mongoose');
const STUSCHEMA=mongoose.Schema({
    name:String,
    password:String,
    department:String,
    Rollno:String,
    MobileNumber:String,
    CurrentGPA:String,
    OverallCGPA:String,
    Dateofjoin:String,
    DOG:String, //date of graduation
    Xii_marks:String,
    x_marks:String,
    role:{
        type:String,
        enum:['student','admin'],
        default:'student'
    }
})
const model=mongoose.model('deatil',STUSCHEMA);
module.exports=model;
