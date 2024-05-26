const mongoose = require('mongoose');
const toDoSchema = new mongoose.Schema({
    text:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    },
    dueDate:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("ToDo",toDoSchema,"toDo");
