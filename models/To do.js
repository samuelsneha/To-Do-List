// Schema of the To Do List

const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    //all fields declared here goes to robo3T
    content:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
    // complete:{
    //     type: Boolean,
    //     default: false
    // } 
},  {
        timestamps: true
    } 
);

const ToDo = mongoose.model('ToDo', todoSchema ); // connecting the mongoose model
module.exports = ToDo; //exporting
