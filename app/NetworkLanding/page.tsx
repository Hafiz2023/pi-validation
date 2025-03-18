"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Search, Instagram, Youtube, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import LinK from "next/link";
import { motion } from "framer-motion";
const NetworkLanding = () => {
  const router = useRouter(); // Navigation Hook

  return (
    <div className="bg-[#2D1B4A] text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-8">
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Pi-Network.png"
            alt="Pi Network"
            width={160}
            height={160}
            className="w-auto h-auto"
          />
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-500">
            Developers
          </a>
          <a href="#" className="hover:text-yellow-500">
            About Us
          </a>
          <a href="#" className="hover:text-yellow-500">
            Blog
          </a>
          <a href="#" className="hover:text-yellow-500">
            Support
          </a>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              className="cursor-pointer hover:text-pink-500"
              size={20}
            />
          </a>
          <LinK
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="cursor-pointer hover:text-red-500" size={20} />
          </LinK>
          <a href="#">
            <Search className="cursor-pointer hover:text-gray-300" size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-8">
        {/* Left Side: Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold leading-snug md:leading-tight">
            The First Digital Currency You Can Mine on Your Phone
          </h1>
          {/* Space between heading and paragraph */}
          <div className="mt-4"></div>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Start mining Pi cryptocurrency today with our free, energy-light
            mobile app!
          </motion.p>
          <Button
            className="mt-6 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-5 px-6 rounded-lg flex items-center space-x-5"
            onClick={() => router.push("/PiBrowser")}
          >
            <span>VALIDATE WALLET</span>
            <Download className="h-5 w-5" />
          </Button>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <Image
            src="/mobile.png"
            alt="Pi Network App"
            width={400}
            height={800}
            className="w-auto h-auto"
          />
          <PlayCircle className="absolute top-20 left-1/2 transform -translate-x-1/2 text-red-500 text-5xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NetworkLanding;
