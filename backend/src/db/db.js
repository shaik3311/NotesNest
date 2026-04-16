const express = require('express');
const { default: mongoose } = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_KEY);
        console.log("DB connected successfully");
    }catch(error){
        console.log(error);   
    }
}

module.exports = connectDB