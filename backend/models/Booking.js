// // 
// const mongoose = require("mongoose");

// const BookingSchema = new mongoose.Schema(
//   {
//     referralCode: String,

//     clientId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },

//     clientName: String,

//     clientEmail: String,

//     leadName: String,
//     leadPhone: String,
//     leadEmail: String,
//     leadGoal: String,

//     status: {
//       type: String,
//       default: "pending",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model(
//   "Booking",
//   BookingSchema
// );
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    referralCode: String,

    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    clientName: String,

    clientEmail: String,

    leadName: String,
    leadPhone: String,
    leadEmail: String,
    leadGoal: String,

    status: {
      type: String,
      default: "pending",
    },

    voucherSent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }

);

module.exports = mongoose.model(
  "Booking",
  BookingSchema
);