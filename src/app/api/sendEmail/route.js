import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, projectType, budget, message } = await req.json();

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // owner email
        pass: process.env.EMAIL_PASS, // gmail app password
      },
    });

    // Mail options
    const mailOptions = {
      from: `"Trading-Go Agro Impex" <${process.env.EMAIL_USER}>`,
      to: "skysdevs@gmail.com", // owner receiving email
      subject: "🌿 New Business Inquiry – Trading-Go Agro Impex",
      html: `
      <div style="font-family: Arial, sans-serif; background:#f3f6f4; padding:30px;">
        <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 12px 35px rgba(0,0,0,0.08);">

          <!-- Header -->
          <div style="background:linear-gradient(135deg,#14532d,#166534); padding:24px; text-align:center;">
            <h1 style="color:#ffffff; margin:0; font-size:22px;">
              Trading-Go Agro Impex
            </h1>
            <p style="color:#dcfce7; margin:6px 0 0; font-size:14px;">
              New Client / Business Inquiry Received 🌾
            </p>
          </div>

          <!-- Body -->
          <div style="padding:28px;">
            <p style="color:#334155; font-size:15px; margin-bottom:18px;">
              You have received a new inquiry from your website. Below are the client details:
            </p>

            <table style="width:100%; border-collapse:collapse; font-size:15px;">
              <tr>
                <td style="padding:10px; color:#475569;"><strong>Name</strong></td>
                <td style="padding:10px;">${name}</td>
              </tr>
              <tr style="background:#f8fafc;">
                <td style="padding:10px; color:#475569;"><strong>Email</strong></td>
                <td style="padding:10px;">
                  <a href="mailto:${email}" style="color:#15803d; text-decoration:none;">
                    ${email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px; color:#475569;"><strong>Project Type</strong></td>
                <td style="padding:10px;">${projectType}</td>
              </tr>
              <tr style="background:#f8fafc;">
                <td style="padding:10px; color:#475569;"><strong>Budget</strong></td>
                <td style="padding:10px;">${budget}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="margin-top:22px;">
              <p style="margin-bottom:8px; color:#475569; font-weight:600;">
                Client Message
              </p>
              <div style="background:#ecfdf5; border-left:4px solid #22c55e; padding:15px; border-radius:6px; color:#14532d;">
                ${message}
              </div>
            </div>

            <!-- CTA -->
            <div style="margin-top:32px; text-align:center;">
              <a href="mailto:${email}"
                style="display:inline-block; background:#166534; color:#ffffff; padding:14px 28px; border-radius:8px; text-decoration:none; font-weight:600;">
                Reply to Client
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background:#f0fdf4; text-align:center; padding:16px; font-size:13px; color:#166534;">
            © ${new Date().getFullYear()} Trading-Go Agro Impex  
            <br/>
            <span style="color:#4d7c0f;">Agriculture • Trading • Export</span>
          </div>

        </div>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
