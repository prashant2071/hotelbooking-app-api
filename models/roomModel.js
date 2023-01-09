const mongoose =require('mongoose');
const {Schema} = mongoose
const cloumnType={
    type:String,
    required:true
}
const HotelSchema = new Schema({
    name :{
        ...cloumnType
    },
    type:{
        ...cloumnType
    },
    city:{
        ...cloumnType
    },
    address:{
        ...cloumnType
    },
    distance:{
        ...cloumnType
    },
    photos:{
        type:[String],
    },
    desc:{
        ...cloumnType
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