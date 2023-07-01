"use client";
import React from "react";
import ProjectManagers from "@/app/components/connect/project-managers/ProjectManagers";
import Circle from "@/app/components/connect/circle/Circle";
import WithDashboard from "@/app/components/connect/with-dashboard/WithDashboard";

const Connect = () => {
    return (
        <div className="lg:my-20 my-10 bg-[#00544B] text-[#F5FFFE]">
            <Circle/>
            <ProjectManagers/>
            <WithDashboard/>
        </div>
    );
};

export default Connect;
