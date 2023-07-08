"use client";
import React from "react";
import Link from "next/link";

const MenuOptions = () => {
    return (
        <div className="">
            <ul className="md:flex flex-row md:gap-4 lg:text-lg lg:font-light text-xl lg:leading-normal leading-10">
                <Link href="">
                    <li className="font-bold hover:bg-[#00473F] px-4 py-3 rounded-sm transition duration-300">Top 1%
                    </li>
                </Link>
                <Link href="">
                    <li className="font-bold hover:bg-[#00473F] px-4 py-3 rounded-sm transition duration-300">Why?</li>
                </Link>
                <Link href="">
                    <li className="font-bold hover:bg-[#00473F] px-4 py-3 rounded-sm transition duration-300">Talents</li>
                </Link>
                <Link href="">
                    <li className="font-bold hover:bg-[#00473F] px-4 py-3 rounded-sm transition duration-300">About us
                    </li>
                </Link>
                <Link href="">
                    <li className="font-bold hover:bg-[#00473F] px-4 py-3 rounded-sm transition duration-300">Help</li>
                </Link>
            </ul>
        </div>
    );
};

export default MenuOptions;
