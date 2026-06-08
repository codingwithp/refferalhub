


const { Resend } = require("resend");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

exports.sendVoucherEmail = async (
  email,
  name
) => {
  try {
    const data = await resend.emails.send({
      from: "Referral Hub <onboarding@resend.dev>",
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
          Our team will contact you soon.
        </p>
      `,
    });

    console.log("Email sent:", data);

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};