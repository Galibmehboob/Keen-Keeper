"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children, icon }) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link
            href={href}
            className={`flex items-center gap-1 px-4 py-1 rounded-md font-semibold transition-all duration-200
    ${isActive ? "bg-[#2d5a48] text-white" : "text-black hover:bg-green-100"}`}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {children}
        </Link>
    );
};

export default MyLink;