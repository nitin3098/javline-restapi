const mongoose = require("mongoose");

const myschema = new mongoose.Schema({
    
    ranking: {
        type : Number,
        required : true,
        unique:true
    },
    name :{
        type: String,
        required: true,
        trim :true
    },
    dob: {
        type: Date,
        required:true,
        trim:true
        
    },
    country:{
        type:String,
        trim:true
    },
    score:{
        type:Number,
        required:true
    },
    event:
    {
        type: String,
        default: "javeline"
    }


})

const javlineranking = new mongoose.model("javline",myschema);
module.exports = javlineranking;