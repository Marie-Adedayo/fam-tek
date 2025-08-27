"use client";

import { FiArrowUpRight } from "react-icons/fi";
import Img1 from "/Images/gadget-1.jpg"; // ✅ make sure this path is correct (put images inside /public if Next.js)

export default function Hero() {
  return (
    <div className="relative w-full h-[90vh] font-sans overflow-hidden">
      {/* Background Image */}
      <img
        src={Img1}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Latest Smartphones
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-200 drop-shadow-md">
          Discover unbeatable deals on flagship phones.
        </p>
        <a href="/products" className="mt-6">
          <button className="flex items-center gap-2 text-sm md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300">
            Shop Now
            <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </a>
      </div>
    </div>
  );
}
