const express=require("express")
const cors =require("cors")
const app=express()
app.use(cors());
app.use(express.static("3d box.html"))
const port= process.env.port || 3000
app.listen(port)
console.log("listening")
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/3d box.html")
})
app.get("/hello",(req,res)=>{
    console.log("reqmaaadeee");
    res.send("hello")
})