"use client";
import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#2d5a48] text-white py-16 px-6 text-center mt-20">


            <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
                Your personal shelf of meaningful connections. Browse, tend, and nurture
                the relationships that matter most.
            </p>


            <h3 className="text-lg mb-4">Social Links</h3>

            <div className="flex justify-center gap-4 mb-10">
                <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaInstagram />
                </div>
                <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaFacebookF />
                </div>
                <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaXTwitter />
                </div>
            </div>


            <div className="border-t border-gray-400 opacity-30 mb-6"></div>


            <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">

                <p>© 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6 mt-4 md:mt-0">
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