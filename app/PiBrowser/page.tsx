"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router

export default function PiBrowser() {
  const router = useRouter(); // ✅ No more NextRouter error

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center px-6">
      <div className="fixed top-0 w-full h-9 bg-[#703D92] grid place-content-center">
      <span className="text-white font-bold  grid-flow-row flex items-center text-center ">Home
      <Image className="" src="/pi_logo.png" alt="Pi Logo" width={30} height={30} />
      </span>
      </div>

      {/* Pi Logo */}
      <Image src="/icon.png" alt="Pi Logo" width={250} height={250} />

      {/* Icons Section */}
      <div className="grid grid-cols-3 md:grid-cols-9 gap-4 mt-10">
        {iconData.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 cursor-pointer transition duration-300"
            onClick={() => icon.link && router.push(icon.link)} // ✅ Click to navigate
          >
            <div className="w-16 h-16 flex items-center justify-center border-2 border-purple-300 rounded-xl p-3 transition-all duration-300  hover:scale-110">
              <Image
                src={icon.src}
                alt={icon.name}
                width={40}
                height={40}
                className="transition-all duration-300 hover:scale-125"
              />{" "}
              {/* ✅ Icon zoom effect */}
            </div>
            <p className="  text-sm font-medium">{icon.name}</p>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <button className="mt-10 bg-[#703D92]  hover:bg-[#703D92] text-white py-3 px-6 rounded-full text-sm font-semibold shadow-md transition">
        Explore the Testnet Ecosystem
      </button>
    </div>
  );
}

// Icon Data with Wallet Link
const iconData = [
  { name: "Fireside", src: "/fireside.png" },
  { name: "Wallet", src: "/wallet.png", link: "/UnlockPiWallet" }, // ✅ Wallet icon has a link
  { name: "Brainstorm", src: "/brainstorm.png" },
  { name: "Mine", src: "/mine.png" },
  { name: "Blockchain", src: "/blockchain.png" },
  { name: "Develop", src: "/develop.png" },
  { name: "KYC", src: "/kyc.png" },
  { name: "Chat", src: "/chat.png" },
  { name: "Profiles", src: "/profile.png" },

];
