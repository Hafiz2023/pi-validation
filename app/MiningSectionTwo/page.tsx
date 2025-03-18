import Image from 'next/image';

export default function MiningSectionTwo() {
    return (
      <div className="w-full bg-gradient-to-r from-purple-900 to-indigo-800 py-20 px-6 md:px-20 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Image */}
        <div className="image-container md:w-1/2 flex justify-center relative h-[400px]">
          <Image 
            src="/pi.png" 
            alt="Pi Mining App" 
            width={450}  
            height={850} 
            className="w-80 md:w-[350px] h-auto bg-gradient-to-r from-purple-900 to-indigo-800 p-4 rounded-lg"
          />
        </div>
  
        {/* Right Side - Text */}
        <div className="text-container md:w-1/2 text-center md:text-left text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-300">
            Download the mobile app to start mining today! Join now.
          </h2>
          <p className="text-gray-300">
            Keep your money! Mining Pi is free. All you need is an invitation from 
            an existing trusted member on the network. If you have an invitation, 
            you can download the mobile app below.
          </p>
        </div>
  
      </div>
    );
}
