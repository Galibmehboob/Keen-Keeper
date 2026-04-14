"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function NotFoundPage() {
    const visualRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const ratio = 45 / (width / height);
            if (visualRef.current) {
                visualRef.current.style.transform = `translate(-50%, -50%) rotate(-${ratio}deg)`;
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#121212] text-white overflow-hidden p-4 relative font-[Poppins]">

            <Link
                href="/"
                className="fixed z-10 flex items-center gap-2 border-2 border-gray-500 px-3 py-1 text-gray-400 hover:bg-gray-200 hover:text-black hover:border-transparent transition"
            >
                <svg height="0.8em" width="0.8em" viewBox="0 0 2 1" preserveAspectRatio="none">
                    <polyline
                        fill="none"
                        stroke="#777777"
                        strokeWidth="0.1"
                        points="0.9,0.1 0.1,0.5 0.9,0.9"
                    />
                </svg>
                Home
            </Link>


            <div className="relative w-full h-screen select-none">
                <h1
                    ref={visualRef}
                    className="absolute top-1/2 left-1/2 text-[60vmax] text-[#282828] font-[Eczar] tracking-wide transition-all duration-700"
                >
                    404
                </h1>
            </div>


            <p className="fixed bottom-4 right-6 text-right text-gray-300 text-[calc(1em+3vmin)] max-w-[70%] sm:max-w-[50%] lg:max-w-[30%]">
                The page you,re looking for Does not exist.
            </p>
        </div>
    );
}