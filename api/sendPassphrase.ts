// pages/api/sendPassphrase.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { passphrase } = req.body;

    // Perform desired operations with the passphrase
    console.log('Received passphrase:', passphrase);

    res.status(200).json({ message: 'Passphrase received successfully.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


