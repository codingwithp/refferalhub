const Booking = require("../models/Booking");


exports.getRewardCount = async (req, res) => {
  try {
    const userId = req.user.id;

    const rewardCount =
      await Booking.countDocuments({
        clientId: userId,
        status: "converted",
      });

    res.json({
      rewardCount,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.getMyReferrals = async (req, res) => {
  try {
    const userId = req.user.id;

    const referrals = await Booking.find({
      clientId: userId,
    })
      .select(
        "leadName leadEmail status createdAt"
      )
      .sort({ createdAt: -1 });

    res.json(referrals);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};