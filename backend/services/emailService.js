const nodemailer = require("nodemailer");

const transporter =
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

exports.sendVoucherEmail =
  async (email, name) => {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject:
        "Referral Reward Earned",

      html: `
        <h2>Hello ${name}</h2>

        <p>
          Congratulations!
        </p>

        <p>
          One of your referrals has
          successfully converted.
        </p>

        <p>
          You are eligible for an
          Amazon Gift Voucher.
        </p>
      `,
    });
  };