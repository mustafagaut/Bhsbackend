const express = require("express");
const mongoose = require("mongoose");

const urlString = process.env.DB_URL;

const connectDataBase=( )=>{
    console.log(process.env.DB_URL);
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('connection successful');
    }).catch((err)=>{
        console.log(err);
    });
    }

module.exports=connectDataBase;
