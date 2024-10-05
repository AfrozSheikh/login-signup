import express, { urlencoded } from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express() 
app.use(express.json())
app.use(cors())
app.use(urlencoded())
mongoose.connect("mongodb://localhost:27017/log",{
    useNewUrlParser:true , 
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected");
    
})
const userSchema = new mongoose.Schema({
    name:String,
    email:String , 
    password:String
})
const User = new mongoose.model("User" , userSchema)

app.get("/",(req,res)=>{
    res.send("route created") 

})
app.post("/register",(req,res)=>{
    console.log(req.body);
    
    res.send("my api of register ")
})

app.listen(4000) ; 



