const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");
// REGISTER

exports.register = async (req, res) => {
  try {
    const {
name,
email,
phone,
password,
coachCode
}=req.body;
const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

// Example
if (!validatePhone(phone)) {
  return res.status(400).json({
    message: "Please enter a valid 10-digit Indian phone number."
  });
}
    // Email validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const coach = await User.findOne({

coachCode,

role:"coach"

});

if(!coach){

return res.status(404).json({

message:"Invalid Coach Code"

});

}

    
    const referralCode =
      Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user=await User.create({

name,

email,

phone,

password:hashedPassword,

role:"client",

coach:coach._id,

referralCode,



});
    res.status(201).json({
      message: "Registration successful",
      referralCode: user.referralCode,
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// LOGIN
// 
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    
   

    // Normal client login
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      token,
      user,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};