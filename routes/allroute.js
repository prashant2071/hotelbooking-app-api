const express =require('express')
const app =express()
const authRoute = require('./auth')
const userRoute = require('./user')
const hotelRoute = require('./hotel')
const roomRoute = require('./room')

app.use('/auth',authRoute)
// app.use('/user',userRoute)s
app.use('/hotel',hotelRoute)
// app.use('/room',roomRoute)


module.exports=app

