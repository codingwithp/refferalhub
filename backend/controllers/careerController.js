const CareerApplication = require("../models/careerApplication");

exports.applyCareer = async(req,res)=>{

try{

const application = await CareerApplication.create(req.body);

res.status(201).json(application);

}
catch(err){

res.status(500).json({
message:err.message
});

}

};


exports.getApplications = async(req,res)=>{

try{

const applications = await CareerApplication.find()
.sort({createdAt:-1});

res.json(applications);

}

catch(err){

res.status(500).json({
message:err.message
});

}

};