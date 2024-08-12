const mongoose=require("mongoose");
const { boolean } = require("zod");
//mongodb+srv://Jishan:Sja_2610@nodeexpress-projects.tfpkulu.mongodb.net/TODOS
mongoose.connect("mongodb+srv://Jishan:Sja_2610@nodeexpress-projects.tfpkulu.mongodb.net/TODOS")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={todo};