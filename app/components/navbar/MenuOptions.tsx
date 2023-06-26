"use client";
import React from "react";
import Link from "next/link";

const MenuOptions = () => {
    return (
        <div className="">
            <ul className="lg:flex flex-row lg:gap-4 lg:text-lg lg:font-light text-xl lg:leading-normal leading-10">
                <Link href=''>
                    <li>Top 1%</li>
                </Link>
                <Link href=''>
                    <li>Why?</li>
                </Link>
                <Link href=''>
                    <li>Talents</li>
                </Link>
                <Link href=''>
                    <li>About us</li>
                </Link>
                <Link href=''>
                    <li>Help</li>
                </Link>
            </ul>
        </div>
    );
};

export default MenuOptions;
