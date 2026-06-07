const Booking = require("../models/Booking");
const { sendVoucherEmail } = require("../services/emailService");

// Get all referrals
exports.getPipeline = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.json(bookings);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

// Update referral status


exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    console.log("Updating status:", status);

    const booking = await Booking.findById(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    // Update status first
    booking.status = status;

    // Save immediately
    await booking.save();

    console.log(
      "Status updated successfully"
    );

    // Send voucher email only once
    if (
      status === "converted" &&
      !booking.voucherSent
    ) {
      try {
        console.log(
          "Sending voucher email to:",
          booking.clientEmail
        );

        await sendVoucherEmail(
          booking.clientEmail,
          booking.clientName
        );

        booking.voucherSent = true;

        await booking.save();

        console.log(
          "Voucher email sent successfully"
        );
      } catch (emailError) {
        console.error(
          "EMAIL ERROR:",
          emailError
        );

        // Don't fail conversion if email fails
      }
    }

    res.json({
      message: "Status updated",
      booking,
    });
  } catch (err) {
    console.error(
      "UPDATE STATUS ERROR:",
      err
    );

    res.status(500).json({
      message: err.message,
    });
  }
};