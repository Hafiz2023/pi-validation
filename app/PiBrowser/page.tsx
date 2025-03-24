"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PiBrowser() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Top Bar */}
      <div className="fixed top-0 w-full h-9 bg-[#703D92] grid place-content-center shadow-md">
        <span className="text-white font-bold flex items-center space-x-2">
          <Image src="/pi_logo.png" alt="Pi Logo" width={25} height={25} />
          <span>Home</span>
        </span>
      </div>

      {/* Pi Logo */}
      <Image
        src="/pi_logo.png"
        alt="Pi Logo"
        width={250}
        height={250}
        className="mt-12"
      />

      {/* Welcome Message */}
      <div>
        <h1 className="text-xl font-bold mt-6 text-yellow-500">
          Welcome to Pi Browser
        </h1>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-3 md:grid-cols-9 gap-6 mt-14">
        {iconData.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 cursor-pointer transition duration-300"
            onClick={() => icon.link && router.push(icon.link)}
          >
            <div className="w-16 h-16 flex items-center justify-center border-2 border-[#703D92]  rounded-xl p-3 transition-all duration-300 hover:scale-110 ">
              <Image
                src={icon.src}
                alt={icon.name}
                width={40}
                height={40}
                className="transition-all duration-300 hover:scale-125"
              />
            </div>
            <p className="text-sm font-semibold text-white">{icon.name}</p>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full text-sm font-semibold shadow-md transition">
        Explore the Testnet Ecosystem
      </button>
    </div>
  );
}

// Icon Data
const iconData = [
  { name: "Fireside", src: "/fireside.png" },
  { name: "Wallet", src: "/wallet.png", link: "/UnlockPiWallet" },
  { name: "Brainstorm", src: "/brainstorm.png" },
  { name: "Mine", src: "/mine.png" },
  { name: "Blockchain", src: "/blockchain.png" },
  { name: "Develop", src: "/develop.png" },
  { name: "KYC", src: "/kyc.png" },
  { name: "Chat", src: "/chat.png" },
  { name: "Profiles", src: "/profile.png" },
];
