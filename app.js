var express =require("express");
var app=express();
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session=require("express-session");
var indexRouter=require('./router/index');
var usersRouter=require('./router/users');

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({
    secret: 'jiandaonihengaoxing',
    // 每当请求进来  时间未失效时间累加
    resave: false,  
    // 每次进来  重新设置
    saveUninitialized: false, //
    cookie: {
        maxAge:1000*10
     }
}))

app.set("views",__dirname+"/views"); //默认自动去 views找
app.set("view engine","ejs");

app.use("/",indexRouter)
app.use("/users",usersRouter);
    // res.send("等候你，是我生生世世的宿命");


app.get("/",(req,res)=>{
    res.send("见到你，很高兴!");
})
app.listen(8520,"0.0.0.0");
