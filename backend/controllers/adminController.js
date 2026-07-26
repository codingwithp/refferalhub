const User = require("../models/User");
const Booking = require("../models/Booking");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const {
  sendCoachInviteEmail,
} = require("../services/emailService");

// ----------------------
// CREATE COACH
// ----------------------

exports.createCoach = async (req, res) => {

try{

const {name,email,phone,password}=req.body;

const existing=await User.findOne({email});

if(existing){

return res.status(400).json({
message:"Coach already exists"
});

}

const coachCode=
"COACH"+Math.floor(100000+Math.random()*900000);

const hashedPassword=
await bcrypt.hash(password,10);

const coach=await User.create({

name,

email,

phone,

password:hashedPassword,

role:"coach",

coachCode,

isActive:true

});

res.json({

message:"Coach created successfully",

coach

});

}

catch(err){

res.status(500).json({
message:err.message
});

}

};


// ----------------------
// DASHBOARD STATS
// ----------------------

exports.dashboard = async (req, res) => {

  try {

    const coaches = await User.countDocuments({
      role: "coach"
    });

    const clients = await User.countDocuments({
      role: "client"
    });

    const bookings = await Booking.countDocuments();

    const converted = await Booking.countDocuments({
      status: "converted"
    });

    res.json({

      coaches,

      clients,

      leads:bookings,

      rewards: converted * 500

    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};
exports.getCoachInvite = async(req,res)=>{

const coach = await User.findOne({

inviteToken:req.params.token,

role:"coach"

});

if(!coach){

return res.status(404).json({

message:"Invalid Invitation"

});

}

res.json({

name:coach.name,

email:coach.email

});

};
exports.completeCoachRegistration=async(req,res)=>{

const {token,password}=req.body;

const coach=await User.findOne({

inviteToken:token,

role:"coach"

});

if(!coach){

return res.status(404).json({

message:"Invalid Token"

});

}

coach.password=

await bcrypt.hash(password,10);

coach.isActive=true;

coach.inviteToken=null;

await coach.save();

res.json({

message:"Registration Complete"

});

};



// ----------------------
// GET ALL COACHES
// ----------------------

exports.getCoaches = async (req, res) => {

  try {

    const coaches = await User.find({

      role: "coach"

    }).sort({

      createdAt: -1

    });

    res.json(coaches);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};



// ----------------------
// DELETE COACH
// ----------------------

exports.deleteCoach = async (req, res) => {

  try {

    await User.findByIdAndDelete(req.params.id);

    res.json({

      message: "Coach deleted"

    });

  } catch (err) {

    res.status(500).json({

      message: err.message

    });

  }

};



// ----------------------
// GET ALL CLIENTS
// ----------------------
exports.getClients = async (req, res) => {
  try {
    const clients = await User.find({ role: "client" })
      .populate("coach", "name email coachCode");

    res.json(clients);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};




// ----------------------
// GET ALL LEADS
// ----------------------

// ----------------------
// GET ALL LEADS
// ----------------------

exports.getLeads = async (req, res) => {
  try {
    const leads = await Booking.find()
      .populate("clientId", "name email")
      .populate("coachId", "name coachCode");

    res.json(leads);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

// ----------------------
// GET ALL APPLICATIONS
// ----------------------

exports.getApplications = async (req, res) => {
  try {
    const applications = await careerApplication.find()
      .sort({ createdAt: -1 });

    res.json(applications);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};