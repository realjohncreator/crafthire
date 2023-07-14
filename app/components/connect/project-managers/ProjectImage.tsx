"use client";
import React from "react";
import imageCollection from "@/public/images/connect/project-managers/Group 1086282.png";
import Image from "next/image";

const ProjectImage = () => {
    return (
        <div>
            <Image src={imageCollection} className="lg:w-[550px] w-[232px] object-cover lg:m-0 m-auto"
                   alt="project image"/>
        </div>
    );
};

export default ProjectImage;
