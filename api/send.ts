import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../app/components/template"; // ✅ Corrected Path
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await resend.emails.send({
      from: "hafizadil909@gmail.com",
      to: ["adilamin374@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "pi wallet" }),
    });

    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server Error", error: err });
  }
}
