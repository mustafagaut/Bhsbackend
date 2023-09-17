const express = require("express");
const mongoose = require("mongoose");


const connectDataBase=( )=>{
    mongoose.connect('mongodb+srv://mustafaabdeali284:mustafa@cluster0.jjhctsx.mongodb.net/bhs?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    }).then(()=>{
        console.log('connection successful');
    }).catch((err)=>{
        console.log(err);
    });
    }

module.exports=connectDataBase;
