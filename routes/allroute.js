const express =require('express')
const app =express()
const authRoute = require('./authRoute')
const userRoute = require('./userRoute')
const hotelRoute = require('./hotelRoute')
const roomRoute = require('./roomRoute')

//AUTH ROUTE
app.use('/auth',authRoute)

//USER ROUTE
app.use('/user',userRoute)

//HOTEL ROUTE
app.use('/hotel',hotelRoute)

//ROOM ROUTE
app.use('/room',roomRoute)


module.exports=app

