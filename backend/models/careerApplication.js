const mongoose = require("mongoose");

const CareerApplicationSchema = new mongoose.Schema(
{
    fullName:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    age:Number,

    city:String,

    occupation:String,

    reason:String,

    status:{
        type:String,
        default:"Pending"
    }

},
{
    timestamps:true
});

module.exports = mongoose.model(
    "CareerApplication",
    CareerApplicationSchema
);