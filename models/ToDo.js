const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    text : {
        type: String,
        require:true
    },
    complete: {
        type: Boolean,
        require:false
    },
    timestamp: {
        type: String,
        default : Date.now()
    },
})

const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDo;