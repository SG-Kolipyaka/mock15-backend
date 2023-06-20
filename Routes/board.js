const {BoardModel}=require("../Model/board.model")
const {Router}=require("express")
const {auth}=require("../middlewares/auth")


const  boardrouter=Router()


boardrouter.post("/add",auth,async(req,res)=>{
    try{
        const board=new BoardModel(req.body)
        await board.save()
        console.log(board._id)
res.send({"msg":"Board Created Successfully"})
    }catch(er){
res.send(er)
    }
})



boardrouter.get("/",auth,async(req,res)=>{
    
    try{
        const user=await BoardModel.find()
        res.send(user)


    }catch(er){
        res.send(er)

    }
})


boardrouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const board=await BoardModel.findOne({_id:id})
    try{
if(board){
await BoardModel.findByIdAndDelete({_id:id})
res.send("Board Deleted")
}else{
    res.send("Board Not Found")
}

    }catch(er){
        res.send(er.message)
    }
})


module.exports={
    boardrouter
}