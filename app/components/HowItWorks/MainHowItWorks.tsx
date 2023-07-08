"use client";
import React from "react";
import HowItWorks from "@/app/components/HowItWorks/HowItWorks";
import WeAreCraftHire from "@/app/components/HowItWorks/WeAreCraftHire";

const MainHowItWorks = () => {
    return (
        <div className="bg-[#F5FFFE]">
            <HowItWorks/>
            <WeAreCraftHire/>
        </div>
    );
};

export default MainHowItWorks;
