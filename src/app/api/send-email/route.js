import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, message: "All fields are required." }), {
        status: 400,
      });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP settings
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or App Password
      },
    });

    // Verify connection
    await transporter.verify();

    // Send the email
    await transporter.sendMail({
      from: `Website Contact ${email} `, // Sender's details
      to: process.env.RECEIVER_EMAIL, // Your receiving email address
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
