"use client";
import React from "react";
import AppLogo from "@/public/images/navbar/Group 36.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image src={AppLogo} width={100} height={20} alt="app logo" className="-mt-2 lg:block hidden"/>
            </Link>
        </div>
    );
};

export default Logo;
