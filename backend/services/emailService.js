const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// =========================
// Voucher Email
// =========================
exports.sendVoucherEmail = async (email, name) => {
  try {
    const data = await resend.emails.send({
      from: "Weight Loss Factory <noreply@weightlossfactory.in>",
      to: email,
      subject: "Referral Reward Earned",
      html: `
        <h2>Hello ${name}</h2>

        <p>Congratulations!</p>

        <p>One of your referrals has successfully converted.</p>

        <p>You are eligible for a ₹500 Amazon Gift Voucher.</p>

        <p>Our team will contact you soon.</p>
      `,
    });

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// =========================
// Coach Invitation Email
// =========================
exports.sendCoachInviteEmail = async (email, name, inviteLink) => {
  try {
    const data = await resend.emails.send({
      from: "Weight Loss Factory <noreply@weightlossfactory.in>",
      to: email,
      subject: "You're Invited as a Coach",

      html: `
      <div style="font-family:Arial;padding:30px;max-width:600px;margin:auto">

        <img src="https://weightlossfactory.in/logo.png"
             style="height:70px"/>

        <h2>Hello ${name},</h2>

        <p>
        You have been invited to join
        <b>Weight Loss Factory</b> as a Coach.
        </p>

        <p>
        Click the button below to create your password.
        </p>

        <a href="${inviteLink}"
           style="
             display:inline-block;
             padding:14px 24px;
             background:#f97316;
             color:white;
             text-decoration:none;
             border-radius:8px;
             font-weight:bold;
           ">
           Create Password
        </a>

        <p style="margin-top:30px">
        If you didn't expect this invitation,
        simply ignore this email.
        </p>

      </div>
      `,
    });

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};