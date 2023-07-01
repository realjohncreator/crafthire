"use client";
import React from "react";
import Link from "next/link";

const HireTeamButton = () => {
    return (
        <div>
            <Link href=""
                  className="bg-[#FFCC00] text-[#212121] px-2 py-1 rounded-sm font-semibold hover:bg-[#00544B] hover:text-[#FFFFFF] transition duration-300">
                Hire a Team
            </Link>
        </div>
    );
};

export default HireTeamButton;
