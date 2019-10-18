var mongoose=require('../dbconfig');
var usersSchema = new mongoose.Schema({
    uname:{
        type:String,
        // unique:true
    },
    sex:{
        type:Number,
        default:2 
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
module.exports= mongoose.model("users",usersSchema);
//json  深拷贝
