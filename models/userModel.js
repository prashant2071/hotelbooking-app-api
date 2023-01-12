const mongoose =require('mongoose');
const validator = require('validator')
const {Schema} = mongoose
const dataType={
    type:String,
    required:[true,"required feild"]
}
const UserSchema = new Schema({
    username :{
        ...dataType,
        unique:true,
        minlength:[5,"username length must be greater then 4"]
    },
    email:{
        ...dataType,
        unique:true ,
        validate:[validator.isEmail,"Email must be Valid"]
    },
    password:{
        ...dataType,
        minlength:[6,"password must be greater then 6"]
    },
    role:{
        type:Number,
        default:2
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},{timestamps:true})
const userModel= mongoose.model("User",UserSchema);
module.exports=userModel;