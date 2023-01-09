const express =require('express')
const dotenv = require('dotenv')
dotenv.config();
const app =express();
const connectDatabase = require('./database/connection');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const hotelRoute = require('./routes/hotel')
const roomRoute = require('./routes/room')

const {SERVERPORT} = require('./config/envCrediantials')
connectDatabase();

app.use('/auth',authRoute)
// app.use('/user',userRoute)
app.use('/hotel',hotelRoute)
// app.use('/room',roomRoute)



app.listen(SERVERPORT.PORT,(err)=>{
    if(err){
        console.log("server connection failed!")
        return;
    }
    else{

    console.log(`server connected successfully at ${SERVERPORT.PORT}` )
    }
})