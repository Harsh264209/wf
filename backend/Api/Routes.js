
const express=require('express')
const mongoose=require('mongoose')
const Visitor=require('../database/Users')
const Router = express.Router();


Router.post('/new',async(req,res)=>{

    
    try {
        
        const {name,email,message}=req.body

        const user=await new Visitor({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        })
    
        await user.save()
        res.json({message:"message send successfully"})
    } 
    catch (error) {
        res.status(400).json({error:error})
    }    
   
    })
    



Router.get('/fetch',async(req,res)=>{

    try {
        const {name,email,message}=req.body

        const visitors=await Visitor.find()
    
        res.json({message:"users fetched duccessfully"})
    } catch (error) {
        
        res.status(400).json({error:error})
    }
})


module.exports = Router;