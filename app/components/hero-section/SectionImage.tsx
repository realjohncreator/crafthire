"use client";
import React from "react";
import HeroImage from "@/public/images/hero-section/Frame 20.png";
import Image from "next/image";

const SectionImage = () => {
    return (
        <div>
            <Image src={HeroImage} className="lg:block hidden object-cover w-[640px] h-[468px]" alt="section-image"/>
        </div>
    );
};

export default SectionImage;
