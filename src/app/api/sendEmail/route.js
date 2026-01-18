import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, projectType, budget, message } = await req.json();

    // Nodemailer transporter setup
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "agg99011@gmail.com", // sender email (exact same as from)
        pass: "aata pvnh hphq julc", // Gmail App Password
      },
    });

    // Email content
    let mailOptions = {
      from: "agg99011@gmail.com", // same as transporter user
      to: "skysdevs@gmail.com", // admin email
      subject: `New Contact Query from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType}
Budget: ${budget}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (err) {
  console.error("Email Error:", err); // ← full error
  return new Response(JSON.stringify({ error: err.message, stack: err.stack }), { status: 500 });
}
}
