
import React from 'react';

import { BiStats } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

import MyLink from './MyLink';

const NavBar = () => {
    const navItems = [
        {
            path: "/",
            icon: <GoHome />,
            text: "Home",
        },
        {
            path: "/timeline",
            icon: <IoMdTime />,
            text: "Timeline",
        },
        {
            path: "/stats",
            icon: <BiStats />,
            text: "Stats",
        },
    ];
    return (
        <nav className="w-full sticky top-1 z-10 mb-20 bg-zinc-100 text-white px-6 py-4 flex items-center justify-between shadow-md">


            <h1 className="text-2xl text-black  tracking-wide">
                <span className='font-bold'>Keen</span> Keeper
            </h1>


            <div className="flex gap-2">
                {navItems.map((item, index) => (
                    <MyLink key={index} href={item.path} icon={item.icon}>
                        {item.text}
                    </MyLink>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;