const {BoardModel}=require("../Model/board.model")
const {Router}=require("express")
const {TaskModel}=require("../Model/task.model")
const {auth}=require("../middlewares/auth")


const  taskrouter=Router()


taskrouter.patch("/addt/:id",async(req,res)=>{
    const {id}=req.params
    const board=await BoardModel.findOne({_id:id})
    try{
        if(board){
            const task=new TaskModel(req.body)
           let arr= board.tasks
           arr.push(task)
console.log(arr)
            await BoardModel.findByIdAndUpdate({_id:id},{tasks:arr})
            res.send({"msg":"Task Added Successfully"})
        }else{
            res.send({"msg":"Board Not found"})
        }
      

    }catch(er){
res.send(er)
    }
})





module.exports={
    taskrouter
}