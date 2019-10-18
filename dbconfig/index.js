var mongoose = require("mongoose");
//连接到 库
var dburl ="mongodb://127.0.0.1:27017/html1904"

mongoose.connect(dburl,(err)=>{
    if(err){
        console.log("连接失败"+err);
    }else{
        console.log("连接成功");
    }
})
module.exports=mongoose;