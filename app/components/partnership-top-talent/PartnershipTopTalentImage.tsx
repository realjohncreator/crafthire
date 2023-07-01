"use client";
import React from "react";
import Image from "next/image";
import alx from "@/public/images/partnership-top-talent/Alx.png";
import andela from "@/public/images/partnership-top-talent/Andela (3).png";
import genesys from "@/public/images/partnership-top-talent/Genesys.png";

const PartnershipTopTalentImage = () => {
    return (
        <div className="flex flex-row lg:gap-6 gap-1">
            <Image src={alx} className="lg:w-[260px] md:w-[220px] w-[110px] h-[344px] object-contain cursor-pointer"
                   alt="Alx"/>
            <Image src={andela} className="lg:w-[260px] md:w-[220px] w-[110px] h-[344px] object-contain cursor-pointer"
                   alt="Andela"/>
            <Image src={genesys} className="lg:w-[260px] md:w-[220px] w-[110px] h-[344px] object-contain cursor-pointer"
                   alt="Genesys"/>
        </div>
    );
};

export default PartnershipTopTalentImage;
