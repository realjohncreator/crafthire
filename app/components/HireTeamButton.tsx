"use client";
import React from "react";
import Link from "next/link";

const HireTeamButton = () => {
    return (
        <div>
            <Link href=""
                  className="bg-[#FFCC00] text-[#212121] whitespace-nowrap lg:px-4 lg:py-3 md:px-1 md:py-1 px-4 py-3 rounded-sm font-bold hover:bg-inherit border border-[#FFCC00] hover:border-[#FFCC00] hover:text-[#FFFFFF] transition duration-300">
                Request To Hire a Team
            </Link>
        </div>
    );
};

export default HireTeamButton;
