"use client";
import React from "react";
import imageCollection from "@/public/images/connect/project-managers/Ellipse 12.png";
import Image from "next/image";

const ProjectDetails = () => {
    return (
        <div className="lg:w-[529px] w-[308px]">
            <div className="flex flex-col gap-4">
                <h1 className="lg:text-4xl text-2xl">Get the guidance of <br/> <span className="font-bold">Project Managers</span>
                </h1>
                <p className="font-bold lg:text-lg text-sm">
                    With their expert guidance and unwavering dedication, you'll witness your ideas take shape and
                    transform into remarkable realities.
                </p>
            </div>

            <div className="flex flex-row items-center gap-4 mt-10">
                <Image src={imageCollection} className="object-cover w-20 h-20" alt="project owner's image"/>
                <p className="w-348px font-light lg:text-lg text-sm">
                    "The project manager from CraftHire has been an invaluable asset to our team.They bring order,
                    coordination, and expertise to our projects, ensuring everything runs seamlessly." <br/>
                    <span className="font-bold">- Sarah, CTO of TechSolutions</span>
                </p>
            </div>
        </div>
    );
};

export default ProjectDetails;
