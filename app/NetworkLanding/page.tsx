"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Search, Instagram, Youtube, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const NetworkLanding = () => {
  const router = useRouter(); // Navigation Hook

  return (
    <div className="bg-[#703D92] text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-8">
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Pi-Network.png"
            alt="Pi Network"
            width={160}
            height={160}
            priority // ✅ Fix: Ensures it loads properly
            className="w-auto h-auto"
          />
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-yellow-500">
            Developers
          </Link>
          <Link href="#" className="hover:text-yellow-500">
            About Us
          </Link>
          <Link href="#" className="hover:text-yellow-500">
            Blog
          </Link>
          <Link href="#" className="hover:text-yellow-500">
            Support
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-3">
          <Link href="https://www.instagram.com" target="_blank">
            <Instagram
              className="cursor-pointer hover:text-pink-500"
              size={20}
            />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <Youtube className="cursor-pointer hover:text-red-500" size={20} />
          </Link>
          <Search className="cursor-pointer hover:text-gray-300" size={20} />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl mx-auto p-8 gap-8">
        {/* Left Side: Text Section */}
        <div className="w-full md:w-1/2 self-start">
          <h1 className="text-white text-left text-4xl md:text-4xl font-semibold ">
            The First Digital Currency You Can Mine on Your Phone
          </h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-white text-left text-xl md:text-2xl font-semibold mt-10"
          >
            Start mining Pi cryptocurrency today with our free, energy-light
            mobile app!
          </motion.h3>
          <Button
            className="border border-yellow-500 text-yellow-500 bg-transparent px-6 py-3 rounded-lg flex items-center space-x-2 transition duration-300 hover:bg-yellow-500 hover:text-white mt-14"
            onClick={() => router.push("/PiBrowser")}
          >
            <span>VALIDATE WALLET</span>
            <Download className="h-6 w-6" />
          </Button>
        </div>

        {/* Right Side: YouTube Video */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/MsOaC61cR3U?si=st7ckC6-U2s2h4HS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NetworkLanding;
