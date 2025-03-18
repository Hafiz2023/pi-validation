import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center">
        {/* Left Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-3 text-sm text-center sm:text-left">
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Pi Whitepaper
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Support & FAQ
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Developer Terms of Use
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Community Code of Conduct
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Moderator Services Agreement
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Pi Trademark
          </a>
        </div>

        {/* Right Section - Logo */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Pi-Network.png"
            alt="Pi Network"
            width={160}
            height={160}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </footer>
  );
}
