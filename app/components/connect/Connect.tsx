"use client";
import React from "react";
import ConnectDetail from "@/app/components/connect/ConnectDetail";
import ConnectOscillator from "@/app/components/connect/ConnectOscillator";

const Connect = () => {
    return (
        <div className="lg:my-20 my-10 bg-[#00544B] text-[#F5FFFE]">
            <div className="lg:flex justify-between items-center gap-10 lg:pb-20">
                <ConnectDetail/>
                <ConnectOscillator/>
            </div>

            <div>
                test
            </div>
        </div>
    );
};

export default Connect;