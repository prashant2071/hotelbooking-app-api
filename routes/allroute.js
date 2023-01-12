const express =require('express')
const app =express()
const authRoute = require('./authRoute')
const userRoute = require('./userRoute')
const hotelRoute = require('./hotelRoute')
const roomRoute = require('./roomRoute')

app.use('/auth',authRoute)
// app.use('/user',userRoute)
app.use('/hotel',hotelRoute)
// app.use('/room',roomRoute)


module.exports=app

