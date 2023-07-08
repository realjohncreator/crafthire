"use client";
import React from "react";
import ThemeButton from "@/app/components/DarkMode/ThemeButton";
import Link from "next/link";
import HireTeamButton from "@/app/components/HireTeamButton";

const UserMenu = () => {
    return (
        <div className="flex flex-row items-center gap-4">
            <ThemeButton/>
            <Link href="pages/auth/login"
                  className="lg:font-bold hover:bg-[#00473F] px-4 py-3 rounded-sm transition duration-300">
                Login
            </Link>
            <HireTeamButton/>
        </div>
    );
};

export default UserMenu;
