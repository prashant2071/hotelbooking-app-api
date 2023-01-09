const express =require('express')
const dotenv = require('dotenv')
dotenv.config();
const app =express();
const connectDatabase = require('./database/connection');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
connectDatabase();

app.use('/auth',authRoute)



app.listen(8080,(err)=>{
    if(err){
        console.log("server connection failed!")
        return;
    }
    else{
        console.log("server connected successfully")
    }
})