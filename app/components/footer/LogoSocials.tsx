"use client";
import React from "react";
import AppLogo from "@/public/images/navbar/Group 36.png";
import Image from "next/image";
import {BiLogoFacebookCircle} from "react-icons/bi";
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";
import Link from "next/link";
import Logo from "@/app/components/navbar/Logo";

const LogoSocials = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:justify-between gap-4 items-center">
            <div className="flex items-center lg:flex-row flex-col lg:gap-8 gap-4 py-2">
                <Logo/>
                <span>|</span>
                <h4 className="text-sm font-light">Top 1% entry level techies</h4>
            </div>

            <div className="flex flex-row gap-2 text-2xl">
                <BiLogoFacebookCircle/>
                <AiFillInstagram/>
                <AiFillLinkedin/>
                <BsTwitter/>
            </div>
        </div>
    );
};

export default LogoSocials;
