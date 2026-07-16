const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
  const exists = await User.findOne({
    email: "pragathiacharya18@gmail.com",
  });

  if (exists) {
    console.log("Super Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("Kaaraaam27", 10);

  await User.create({
    name: "Prasanna",
    email: "panna2788@gmail.com",
    phone: "9902581097",
    password: hashedPassword,
    role: "superadmin",
    isActive: true,
  });

  console.log("✅ Super Admin Created");
  process.exit();
}

createAdmin();