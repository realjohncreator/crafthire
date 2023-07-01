"use client";
import React from "react";
import Link from "next/link";

const GetStartedButton = () => {
    return (
        <div>
            <Link href=""
                  className="border border-[#FFCC00] text-[#FFCC00] px-2 py-1 rounded-sm font-semibold hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition duration-300">
                Hire a Team
            </Link>
        </div>
    );
};

export default GetStartedButton;
