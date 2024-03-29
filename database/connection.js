const mongoose =require('mongoose')
const {MONGOCLOUD_DB,DB,WHICH_DATABASE} = require('../config/envCrediantials')
let url={};
if(WHICH_DATABASE.WHICH_DATABASE=="CLOUDS"){
    url.url=MONGOCLOUD_DB.CLOUD_URL
    url.type="cloud"
}
else{
    url.url=`mongodb://${DB.HOST}:${DB.PORT}/${DB.NAME}`
    url.type="local"
}
const connectDatabase = async() => {

    try {    
        mongoose.set('strictQuery', true);
        await mongoose.connect(url.url);
        console.log(`connected to ${url.type} database successfully :)`);
      } catch (error) {
        console.log('database connection failed!!! error is',error);
        throw(error);
    }

}
mongoose.connection.on("disconnected",()=>{
    console.log("disconnected backend")
})
mongoose.connection.on("connected",()=>{
    console.log("connected backend")
})
module.exports = connectDatabase; 
