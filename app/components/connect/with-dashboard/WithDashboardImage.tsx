"use client";
import React from "react";
import dashboardImage from "@/public/images/connect/WithDashboard/Dashboard.png";
import Image from "next/image";

const WithDashboardImage = () => {
    return (
        <div>
            <Image src={dashboardImage} className="lg:w-[1050px]" alt="Dashboard"/>
        </div>
    );
};

export default WithDashboardImage;
