"use client";
import React from "react";
import Container from "@/app/components/Container";
import ProjectImage from "@/app/components/connect/project-managers/ProjectImage";
import ProjectDetails from "@/app/components/connect/project-managers/ProjectDetails";

const ProjectManagers = () => {
    return (
        <Container>
            <div
                className="flex lg:flex-row flex-col-reverse lg:items-start items-center lg:py-20 py-32 lg:gap-96 gap-20">
                <ProjectImage/>
                <ProjectDetails/>
            </div>
        </Container>
    );
};

export default ProjectManagers;
