"use client";
import React from "react";
import Container from "@/app/components/Container";
import ProjectImage from "@/app/components/connect/project-managers/ProjectImage";
import ProjectDetails from "@/app/components/connect/project-managers/ProjectDetails";

const ProjectManagers = () => {
    return (
        <Container>
            <div
                className="flex md:flex-row flex-col-reverse items-center lg:py-20 py-10 lg:gap-60 md:gap-40 gap-20">
                <ProjectImage/>
                <ProjectDetails/>
            </div>
        </Container>
    );
};

export default ProjectManagers;
