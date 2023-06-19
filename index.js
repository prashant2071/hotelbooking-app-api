const express =require('express')
const dotenv = require('dotenv')
dotenv.config();
const app =express();
const connectDatabase = require('./database/connection');
const allRoute = require('./routes/allroute');
const cookieParser = require('cookie-parser');
const morgan = require('morgan')


const {SERVERPORT} = require('./config/envCrediantials')
connectDatabase();
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'))

//ALL API ROUTE
app.use('/api',allRoute)

//PAGE NOT FOUND
app.all("*", (req, res,next) => {
    next({
        message:"page not found",
        status:404
    });
  });
   

  //ERROR HANDELLING MIDDLEWARE
  app.use( function(err, req, res,next) {
    console.log("the error is",err);
    res
    .status(err.status||500)
    .json({
      success:false,
      status: err.status||500 ,
      msg: err.message|| err ,
      errMessage:err.errMessage,
      name:err.name,
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