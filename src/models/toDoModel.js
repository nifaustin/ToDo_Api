import mongoose from "mongoose";
const toDoSchema = mongoose.Schema({
    duration :{
        type : String,
        required : true
    },
    task :{
        type : String,
        required : true
    },

}) 
const toDoModel = mongoose.model("toDo",toDoSchema);

export default toDoModel;