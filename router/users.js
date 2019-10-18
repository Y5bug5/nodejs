var express=require('express');
var mongoose = require('mongoose');
var router =express.Router();
var usersModel = require('../model/users');
router.get("/add",(req,res)=>{ 
   var _id=mongoose.Types.ObjectId(req.query._id);
    usersModel.find({_id},(err,info)=>{  
        res.render("add",{info:info[0]});
    }) 
})
router.post("/add",(req,res)=>{  
    var body=req.body
    var temp={
        uname:body.uname,
        sex:body.sex,
        test:body.test
    }
    if(body._id){
        var _id=mongoose.Types.ObjectId(body._id);
        usersModel.update({_id},{$set:temp},(err,info)=>{
            console.log(info);
            res.json({msg:"修改成功",code:1})
        })
    }else{
            usersModel.create(temp,(err,info)=>{
            if(err){    //null和值
                res.json({msg:"添加失败",code:0})
            }else{
                res.json({msg:"添加成功",code:1})
            }
        });
     }
})
router.post("/del",(req,res)=>{
    var body= req.body;   
    var _id=mongoose.Types.ObjectId(body._id);
    usersModel.remove({_id},(err,info)=>{
        if(err){
            res.json({msg:"err",code:0})
        }else{
            res.json({msg:"success",code:1})
        }
    })
 
})
router.get("/info",(req,res)=>{
    res.send("追随神的意志，征战四方");
})
module.exports=router;