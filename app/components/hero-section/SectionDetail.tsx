"use client";
import React from "react";
import HireTeamButton from "@/app/components/HireTeamButton";

const SectionDetail = () => {
    return (
        <div className="w-[550px] h-[394px]">
            <h1 className="w-[524px] h-[162px] font-bold lg:text-6xl text-4xl leading-10">
                Hire <span className="text-[#FFCC00]">Top 1%</span> tech <br/> rookies for your <br/> project
            </h1>

            <p className="lg:mt-10 mt-2 mb-5 lg:text-lg font-light">
                Boost your project's success with a skilled and <br/> budget-friendly tech team. Tap into their <br/>
                expertise and enthusiasm to propel your business <br/> forward!
            </p>

            <HireTeamButton/>
        </div>
    );
};

export default SectionDetail;
