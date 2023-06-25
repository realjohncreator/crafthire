"use client";
import React from "react";
import Logo from "@/app/components/navbar/Logo";
import MenuOptions from "@/app/components/navbar/MenuOptions";
import UserMenu from "@/app/components/navbar/UserMenu";

const Navbar = () => {
    return (
        <div
            className="sticky top-0 flex justify-between items-center bg-[#00544B] text-[#FFFFFF] py-4 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <div className="flex flex-row items-center gap-20">
                <Logo/>
                <MenuOptions/>
            </div>

            <div>
                <UserMenu/>
            </div>
        </div>
    );
};

export default Navbar;
