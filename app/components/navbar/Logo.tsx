"use client";
import React from "react";
import AppLogo from "@/public/images/navbar/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image src={AppLogo} width={150} height={10} alt="app logo" className="object-cover -mt-2"/>
            </Link>
        </div>
    );
};

export default Logo;
