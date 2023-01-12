const mongoose =require('mongoose');
const {Schema} = mongoose
const cloumnType={
    type:String,
    required:true
}
const UserSchema = new Schema({
    username :{
        ...cloumnType,
        unique:true
    },
    email:{
        ...cloumnType,
        unique:true 
    },
    password:{
        ...cloumnType
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