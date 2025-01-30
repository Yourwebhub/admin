import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { firstName, lastName, email, phone, category, country, projectLength, budget,currency } = body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or App Password
      },
    });

    // Email content
    const mailOptions = {
      from: `Proposal from company website <${email}>`, // Sender address
      to: process.env.RECEIVER_EMAIL, // Recipient email(s)
      subject: "New Order Submission", // Email subject
      html: `
        <h1>New Order Submitted</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Expected Project Length:</strong> ${projectLength}days </p>
        <p><strong>Expected Budget:</strong> ${budget} ${currency}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
