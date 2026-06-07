const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");
// REGISTER

exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

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

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
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

    // Hardcoded coach login
    if (
      email === "referralhub10@gmail.com" &&
      password === "referral@10"
    ) {
      const token = jwt.sign(
        {
          id: "coach",
          role: "coach",
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      return res.json({
        token,
        user: {
          name: "Prasanna",
          email: "referralhub10@gmail.com",
          phone: "9902581097",
          role: "coach",
        },
      });
    }

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