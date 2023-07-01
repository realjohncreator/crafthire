"use client";
import React from "react";
import ConnectDetail from "@/app/components/connect/circle/ConnectDetail";
import ConnectOscillator from "@/app/components/connect/circle/ConnectOscillator";

const Circle = () => {
    return (
        <div className="md:flex justify-between items-center gap-10 lg:pb-20">
            <ConnectDetail/>
            <ConnectOscillator/>
        </div>
    );
};

export default Circle;
