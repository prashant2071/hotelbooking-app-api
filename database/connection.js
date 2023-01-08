const mongoose =require('mongoose')
const {MONGOCLOUD_DB,DB,WHICH_DATABASE} = require('../config/envCrediantials')
let url;
if(WHICH_DATABASE.WHICH_DATABASE==="CLOUD"){
    url=MONGOCLOUD_DB.CLOUD_URL
}
else{
    url=`mongodb://${DB.HOST}:${DB.PORT}/${DB.NAME}`
}
function connectDatabase() {
            mongoose.set('strictQuery', true);
            mongoose.connect("mongodb+srv://PRASHANT:PRASHANT@123GO@cluster0.zslpnqq.mongodb.net/booking?retryWrites=true&w=majority",(err)=>{
                if(err){
                    console.log("database connection failed")
                    return;
                }
                console.log('databse connected successfully')

            });
    // try {    
    //     mongoose.set('strictQuery', true);
    //     await mongoose.connect(url);
    //     console.log('database connected successfully :)');
    //   } catch (error) {
    //     console.log('database connection failed! error is',error);
    //     throw(error);
    // }
}
module.exports = connectDatabase 
