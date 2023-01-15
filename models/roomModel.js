const mongoose =require('mongoose');
const validator = require('validator')
const {Schema} = mongoose
const dataType={
    type:String,
    required:[true,"required feild"]
}
const roomNumberSchema=new Schema({
    number:{
        type:Number
    },
    unavailabeDates:{
        type:[Date],
    }
})
const RoomSchema = new Schema({
    title :{
        ...dataType,
    },
    price:{
        ...dataType,
    },
    maxPeople:{
        type:Number,
        required:[true,"required feild"]
    },
    description:{
        ...dataType
    },
    roomNumbers:[roomNumberSchema]

},{timestamps:true})
const userModel= mongoose.model("Room",RoomSchema);
module.exports=userModel;