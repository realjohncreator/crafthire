"use client";
import React from "react";
import Image from "next/image";
import TrustedByImg from "@/public/images/Partners/Trusted by.png";

const TrustedBy = () => {
    return (
        <div className="flex justify-center items-center">
            <Image src={TrustedByImg} alt=""/>
        </div>
    );
};

export default TrustedBy;
