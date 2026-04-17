"use client";
import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#2d5a48] text-white py-12 sm:py-16 px-4 sm:px-6 text-center  sm:mt-20">


            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                KeenKeeper
            </h1>


            <p className="text-gray-200 max-w-md sm:max-w-xl mx-auto mb-8 text-sm sm:text-base">
                Your personal shelf of meaningful connections. Browse, tend, and nurture
                the relationships that matter most.
            </p>


            <h3 className="text-base sm:text-lg mb-4">Social Links</h3>

            <div className="flex justify-center gap-3 sm:gap-4 mb-10">
                <div className="bg-white text-black p-2 sm:p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaInstagram size={16} className="sm:text-xl" />
                </div>
                <div className="bg-white text-black p-2 sm:p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaFacebookF size={16} className="sm:text-xl" />
                </div>
                <div className="bg-white text-black p-2 sm:p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaXTwitter size={16} className="sm:text-xl" />
                </div>
            </div>


            <div className="border-t border-gray-400 opacity-30 mb-6"></div>


            <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs sm:text-sm gap-3">

                <p className="text-center md:text-left">
                    © 2026 KeenKeeper. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
                    <a href="#" className="hover:text-white transition">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-white transition">
                        Cookies
                    </a>
                </div>

            </div>
        </footer>
    );
}