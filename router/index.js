var express=require("express");
var router=express.Router();
var usersModel=require("../model/users");
var EventProxy = require('eventproxy');
var ep = new EventProxy();
router.get("/",(req,res)=>{
    // console.log(req.query.page);
    // res.send("酸菜鱼，又酸，又菜，又多鱼");
    //每页十条
    var pageSize=10;
    var page=req.query.page?req.query.page:1;
    //计算偏移量
    var pageOffset=(page-1)*pageSize;
    // 1-1*pageSize
    // 2-1*pageSize
    // 3-1*pageSize
    //console.log();
    //skip()跳过   limit()返回的数量
    ep.all("pageData","allNum",(pageData,allNum)=>{
        // console.log(pageData,allNum);
        res.render("index",{
            pageData,
            allNum,
            pageSize,
            page
        });
    })
    usersModel.find().skip(pageOffset).limit(pageSize).exec((err,info)=>{
    //    res.render("index",{data:info});
    ep.emit("pageData",info);
    })
    usersModel.count((err,info)=>{
        // console.log(info);
        ep.emit("allNum",info);
    })

    // res.send("坚强起来！");
})

router.get("/info",(req,res)=>{
    res.send("圣光忽悠着你！");
});
module.exports=router;