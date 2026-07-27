const Booking = require("../models/Booking");
const { sendVoucherEmail } = require("../services/emailService");
const User = require("../models/User");

exports.getMyClients = async(req,res)=>{

try{

const clients = await User.find({

role:"client",

coach:req.user.id

});

res.json(clients);

}

catch(err){

res.status(500).json({

message:err.message

});

}

};
// Get all referrals
exports.getPipeline = async (req, res) => {
  try {
    const bookings = await Booking.find({

coachId:req.user.id

});

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

   const booking = await Booking.findOne({
    _id: req.params.id,
    coachId: req.user.id
});

if (!booking) {
    return res.status(404).json({
        message: "Booking not found"
    });
}

booking.status = status;

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

       const result = await sendVoucherEmail(
  booking.clientEmail,
  booking.clientName
);

console.log("Resend Result:", result);

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