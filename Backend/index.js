//write a basic express boiler plate code
const express=require("express");
const cors=require("cors");
const {createTodo,updateTodo}=require("./types");
const {todo}=require("./db");
const app=express();
const port=3000;
app.use(express.json());
app.use(cors());
//for validation ue zod library
app.get('/todos',async(req,res)=>{
    //res.send("Hello World!")
    const todos=await todo.find({});//get me all the todos
    res.json({todos});
})
// body{
//     title:String;
//     description:String;
// }
app.post('/todo',async(req,res)=>{
    const createPayLoad=req.body;
    const parsedPayload=createTodo.safeParse(createPayLoad);
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongoDB
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
})
//body{
//     id:mongoDB object id for the specific TODO
// }
app.put('/completed',async function(req,res){
    const updatePayLoad=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayLoad);
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"You sent the wrong inputs",
        })
        return;
    }
    //update that todo in mongoDB 
    await todo.findOneAndUpdate({
        _id:updatePayLoad.id,
    },{
        completed:true
    })
    res.json({"msg":"Todo is completed"});
})

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})