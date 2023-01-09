const express =require('express')
const dotenv = require('dotenv')
dotenv.config();
const app =express();
const connectDatabase = require('./database/connection');
const allRoute = require('./routes/allroute')


const {SERVERPORT} = require('./config/envCrediantials')
connectDatabase();

app.use(express.json())

app.use('/api',allRoute)


app.listen(SERVERPORT.PORT,(err)=>{
    if(err){
        console.log("server connection failed!")
        return;
    }
    else{

    console.log(`server connected successfully at ${SERVERPORT.PORT}` )
    }
})