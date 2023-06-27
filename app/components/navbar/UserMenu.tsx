"use client";
import React from "react";
import ThemeButton from "@/app/components/DarkMode/ThemeButton";
import Link from "next/link";
import HireTeamButton from "@/app/components/HireTeamButton";

const UserMenu = () => {
    return (
        <div className="flex flex-row items-center gap-4">
            <ThemeButton/>
            <Link href="" className="lg:font-light">Login</Link>
            <HireTeamButton/>
        </div>
    );
};

export default UserMenu;
