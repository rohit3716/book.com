const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publishYear:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    actualPrice:{
        type:String,
        required:true,
    },
    sellingPrice:{
        type:String,
        required:true,
    },
    bookCondition:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
})

module.exports = mongoose.model("Books", bookSchema);