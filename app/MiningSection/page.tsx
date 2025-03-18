"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Circle } from "lucide-react";

const MiningPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-6">
      {/* Section Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 px-6 md:px-20">
        {/* Left Side: Text Content (50% Width) */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-purple-700">
            Pi makes crypto mining easy.
          </h2>
          <p className="text-gray-600">
            Breakthrough tech allows you to mine Pi on your phone without
            draining your battery.
          </p>
          <Button className="bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-800">
            Learn The Tech Behind Pi
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Side: Image (50% Width) */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/mining.png"
            alt="Pi Coin"
            width={300}
            height={300}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <Circle className="text-purple-700 hover:text-purple-900" size={40} />
          <h3 className="mt-4 text-lg font-semibold">Decentralized</h3>
          <p className="text-gray-600 text-center mt-2">
            Secure, Immutable, non-counterfeitable and interoperable digital
            money.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <Smartphone
            className="text-purple-700 hover:text-purple-900"
            size={40}
          />
          <h3 className="mt-4 text-lg font-semibold">Mobile First</h3>
          <p className="text-gray-600 text-center mt-2">
            Works on your mobile phone and does not drain your battery.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <Globe className="text-purple-700 hover:text-purple-900" size={40} />
          <h3 className="mt-4 text-lg font-semibold">User & Planet-Friendly</h3>
          <p className="text-gray-600 text-center mt-2">
            Easy to use, secure at scale, without the massive electrical waste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiningPage;
