const User = require("../models/User");
const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const {
      referralCode,
      leadName,
      leadPhone,
      leadEmail,
      leadGoal,
    } = req.body;

    const client = await User.findOne({
      referralCode,
    });

    if (!client) {
      return res.status(404).json({
        message: "Invalid referral code",
      });
    }

    const booking = await Booking.create({
      referralCode,

      clientId: client._id,
      clientName: client.name,
      clientEmail: client.email,

      leadName,
      leadPhone,
      leadEmail,
      leadGoal,
    });

    res.status(201).json(booking);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.json(bookings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};