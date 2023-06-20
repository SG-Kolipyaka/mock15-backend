const express=require("express")
require('dotenv').config()
const cors =require("cors")
const {connection}=require("./db")
const {userRouter} =require("./Routes/user")
const {boardrouter}=require("./Routes/board")
const {taskrouter}=require("./Routes/task")



const app=express()


app.use(express.json()) 
app.use(cors())  




app.get("/",(req,res)=>{
    res.send("Home Route")
})
app.use("/user",userRouter)
app.use("/board",boardrouter)
app.use("/task",taskrouter)



app.listen(process.env.PORT,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch(er){
console.log(er)
    }
console.log(`server is running at ${process.env.PORT}`)
})