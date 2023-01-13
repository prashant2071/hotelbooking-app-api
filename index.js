const express =require('express')
const dotenv = require('dotenv')
dotenv.config();
const app =express();
const connectDatabase = require('./database/connection');
const allRoute = require('./routes/allroute');
const cookieParser = require('cookie-parser')


const {SERVERPORT} = require('./config/envCrediantials')
connectDatabase();
app.use(cookieParser());
app.use(express.json());

app.use('/api',allRoute)

app.all("*", (req, res,next) => {
    // res.status(400).send("page not found");
    next({
        message:"page not found",
        status:404
    });
  });
   

  //error handelling middleware
  app.use( function(err, req, res,next) {
    console.log("the error is",err);
    res
    .status(err.status||500)
    .json({
      msg: err.message|| err ,
      errMessage:err.errMessage,
      status: err.status||500 ,
      code:err.code,
      stack :err.stack
    });
  });
    

app.listen(SERVERPORT.PORT,(err)=>{
    if(err){
        console.log("server connection failed!!!")
        return;
    }
    else{

    console.log(`server connected successfully at ${SERVERPORT.PORT}` )
    }
})