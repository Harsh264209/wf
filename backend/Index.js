

const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
const Visitor=require('../backend/database/Users')
const Router =require('./Api/Routes')
// const port=process.env.port

app.use(cors({
    origin:[""],
    methods:["POST","GET"],
    credentials:true
}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect("mongodb+srv://harsh:harsh45@cluster0.niwycbg.mongodb.net/").then(()=>{
    console.log("Mongo Connection success")
})
    
app.use('/',Router)
app.use('/new',Router)
app.use('/fetch',Router)



app.get('/',(req,res)=>{
    res.json({message:"Welcome server"})
})

    
       
app.listen(4000,()=>{
    console.log("Server is running on 4000")
})