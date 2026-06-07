const nodemailer = require("nodemailer");

const transporter =
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

exports.sendVoucherEmail = async (
  email,
  name
) => {
  try {
    console.log(
      "Attempting to send email..."
    );

    const info =
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject:
          "Referral Reward Earned",
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
          Our team will contact you soon regarding your reward.
        </p>
      `,
      });

    console.log(
      "Email sent:",
      info.messageId
    );

    return info;
  } catch (err) {
    console.error(
      "SEND EMAIL ERROR:",
      err
    );

    throw err;
  }
};