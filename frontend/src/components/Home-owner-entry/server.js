const mongoose =require('mongoose');
const express = require('express');
const app=express();
const router =express.Router();
const User=require('./userSchema')

const DB ='mongodb+srv://Aarav_Babu:PESpass1@cluster0.pzysz6y.mongodb.net/Seproj?retryWrites=true&w=majority'

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}
connectDB();

// User.find({},function(err,users){
//     if(err) console.warn(err);
//     console.warn(users);
// })

app.get('/',function(req,res){
    User.find().select('name').then((data)=>{
        res.status(200).json(data)
        console.warn(data);
    }) 
})

app.get("/search/:apno",function(req,res){
    var regex=new RegExp(req.params.apno,'i');
    User.find({apno:regex}).select('phno').then((result)=>{
        res.status(200).json(result)
    })
})

app.listen(4000,()=>{
    console.log('server at port no 4000');
})


// router.post('/homeowner',(req,res)=>{
//     console.log(req.body);
// })