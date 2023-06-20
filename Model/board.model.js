const mongoose =require("mongoose")


const BoardSchema=mongoose.Schema({
    // _id: String,
     name: String,
     tasks: Array
   },{
    versionKey:false
})





const BoardModel=mongoose.model("board",BoardSchema)

module.exports={
    BoardModel
}