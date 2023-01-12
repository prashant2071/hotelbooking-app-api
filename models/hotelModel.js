const mongoose =require('mongoose');
const {Schema} = mongoose
const dataType={
    type:String,
    required:true
}
const HotelSchema = new Schema({
    name :{
        ...dataType,
        unique:true
    },
    type:{
        ...dataType
    },
    city:{
        ...dataType
    },
    address:{
        ...dataType
    },
    distance:{
        ...dataType
    },
    photos:{
        type:[String],
    },
    title:{
        ...dataType
    },
    description:{
        ...dataType
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{ 
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        default:false
    },
    feature:{
        type:Boolean,
        default:false
    }

})
const hotelModel= mongoose.model("Hotel",HotelSchema);
module.exports=hotelModel;