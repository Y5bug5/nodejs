var mongoose=require('../dbconfig');
var usersSchema = new mongoose.Schema({
    uname:{
        type:String,
        // unique:true
    },
    sex:{
        type:String,
        default:"保密" 
    },
    test:{
        type:String,
        // default:"见到你，很高兴！"
    },
    createTime:{
        type:Date,
        default:new Date()
    }
},{versionKey:false})
//集合 users
module.exports= mongoose.model("users",usersSchema);    //暴露出一个接口
//json  深拷贝
