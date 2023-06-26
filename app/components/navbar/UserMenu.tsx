"use client";
import React from "react";
import ThemeButton from "@/app/components/DarkMode/ThemeButton";
import Link from "next/link";

const UserMenu = () => {
    return (
        <div className="flex flex-row items-center gap-4">
            <ThemeButton/>
            <Link href="" className='lg:font-light'>Login</Link>
            <Link href="" className="bg-[#FFCC00] text-[#212121] px-2 py-1 rounded-sm font-semibold">Hire a Team</Link>
        </div>
    );
};

export default UserMenu;
