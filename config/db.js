const express = require("express");
const mongoose = require("mongoose");


const connectDataBase=( )=>{
    console.log(urlString);
    mongoose.connect('mongodb+srv://mustafaabdeali284:mustafa@cluster0.jjhctsx.mongodb.net/bhs?retryWrites=true&w=majority').then(()=>{
        console.log('connection successful');
    }).catch((err)=>{
        console.log(err);
    });
    }

module.exports=connectDataBase;
