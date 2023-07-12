"use client";
import React from "react";
import Link from "next/link";
import HireTeamButton from "@/app/components/HireTeamButton";

const UserMenu = () => {
    return (
        <div className="flex flex-row items-center gap-4">
            <Link href="pages/auth/login"
                  className="lg:font-bold hover:bg-[#00473F] lg:px-4 lg:py-3 md:px-2 md:py-2 px-4 py-3 rounded-sm transition duration-300">
                Login
            </Link>
            <HireTeamButton/>
        </div>
    );
};

export default UserMenu;
