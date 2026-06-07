const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP VERIFY ERROR:", error);
  } else {
    console.log("SMTP READY");
  }
});

exports.sendVoucherEmail = async (email, name) => {
  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Referral Reward Earned",
    html: `
      <h2>Hello ${name}</h2>

      <p>Congratulations!</p>

      <p>
        One of your referrals has successfully converted.
      </p>

      <p>
        You are eligible for an Amazon Gift Voucher.
      </p>
      <p>
      Our team will be contacting you soon to provide you with the voucher details. Thank you for being a valued member of our referral program!
      </p>
    `,
  });
};