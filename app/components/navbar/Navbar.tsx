"use client";
import React, {useState} from "react";
import Logo from "@/app/components/navbar/Logo";
import MenuOptions from "@/app/components/navbar/MenuOptions";
import UserMenu from "@/app/components/navbar/UserMenu";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [textColor, setTextColor] = useState("#A9A9B3");

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div
            className="sticky top-0 flex justify-between items-center bg-[#00544B] text-[#FFFFFF] py-4 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            {/* Mobile Button */}
            <div onClick={handleNav} className="block sm:hidden z-10">
                {nav ? (
                    <AiOutlineClose size={20} style={{color: `${textColor}`}}/>
                ) : (
                    <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>
                )}
            </div>

            {/* Mobile Menu */}
            <div className={
                nav
                    ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center flex-col gap-4 items-center w-full h-screen bg-[#00544B] text-center ease-in duration-300"
                    : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#00544B] text-center ease-in duration-300"
            }>
                <div className='pb-5'>
                    <Logo/>
                </div>
                <MenuOptions/>
            </div>

            {/* Desktop Menu */}
            <div className="lg:flex hidden">
                <Logo/>
            </div>

            <div className='lg:flex hidden justify-end'>
                <MenuOptions/>
            </div>

            <div>
                <UserMenu/>
            </div>
        </div>
    );
};

export default Navbar;
