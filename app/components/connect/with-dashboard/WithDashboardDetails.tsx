"use client";
import React from "react";
import Image from "next/image";
import withDashboardImg from "@/public/images/connect/WithDashboard/Ellipse 12.png";
import GetStartedButton from "@/app/components/GetStartedButton";

const WithDashboardDetails = () => {
    return (
        <div className="lg:w-[596px] w-[322px] flex flex-col gap-14 lg:items-start items-center">
            <div className="flex flex-col gap-4 lg:pt-0 pt-10">
                <h1 className="lg:text-5xl text-2xl font-light">
                    Stay in control with our <br/>
                    <span className="font-bold">Project Tracking</span>
                </h1>
                <p className="font-bold lg:text-lg text-sm">
                    Witness progress unfold in real-time, celebrate milestones, and navigate the twists and turns with
                    confidence.
                </p>

                <div className="md:pt-10">
                    <GetStartedButton/>
                </div>
            </div>

            <div className="flex flex-row items-center gap-3 lg:px-5 px-0 lg:w-[524px] w-[322px]">
                <Image src={withDashboardImg} className="object-cover w-20 h-20" alt="connect image"/>
                <p className="font-light lg:text-lg text-sm">
                    "Project tracking by CraftHire has revolutionised how we manage our projects. With real-time updates
                    and clear visibility into our progress, we're able to make informed decisions and stay ahead of
                    deadlines.” <br/>
                    <span className="font-bold">- John, COO of DreamBuilders.</span>
                </p>
            </div>
        </div>
    );
};

export default WithDashboardDetails;
