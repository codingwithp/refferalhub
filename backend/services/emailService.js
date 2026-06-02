const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "74.125.24.108", // smtp.gmail.com IPv4
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
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
    `,
  });
};