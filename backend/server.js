const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
const bookingRoutes = require("./routes/bookings");
app.use("/api/bookings", bookingRoutes);
const coachRoutes =
  require("./routes/coach");

app.use("/api/coach", coachRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});