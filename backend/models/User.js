// // const mongoose = require("mongoose");

// // const UserSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: true,
// //     },

// //     email: {
// //       type: String,
// //       required: true,
// //       unique: true,
// //     },

// //     phone: {
// //       type: String,
// //       required: true,
// //     },

// //     password: {
// //       type: String,
// //       required: true,
// //     },

// //     role: {
// //       type: String,
// //       default: "client",
// //     },

// //     referralCode: {
// //       type: String,
// //       unique: true,
// //       sparse: true,
// //     },

// //     referredBy: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "User",
// //       default: null,
// //     },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // module.exports = mongoose.model("User", UserSchema);

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String,
//     unique: true
//   },
//   phone: String,
//   password: String,

//   role: {
//     type: String,
//     enum: ["superadmin", "coach", "client"],
//     default: "client"
//   },

//   referralCode: {
//     type: String,
//     unique: true,
//     sparse: true
//   },

//   coachCode: {
//     type: String,
//     unique: true,
//     sparse: true
//   },

//   coach: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     default: null
//   },

//   invitedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     default: null
//   },

//   inviteToken: String,

//   isActive: {
//     type: Boolean,
//     default: false
//   }
// },
// {
//  timestamps:true
// });

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    phone:{
        type:String,
        required:true
    },

    password:{
        type:String
    },

    role:{
        type:String,
        enum:["superadmin","coach","client"],
        default:"client"
    },

    referralCode:{
        type:String,
        unique:true,
        sparse:true
    },

    coachCode:{
        type:String,
        unique:true,
        sparse:true
    },

    coach:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    },

    // inviteToken:{
    //     type:String,
    //     default:null
    // },

    // isActive:{
    //     type:Boolean,
    //     default:false
    // }
    
},
{
    timestamps:true
});

module.exports=mongoose.model("User",UserSchema);