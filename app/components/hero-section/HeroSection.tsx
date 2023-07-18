"use client";
import React from "react";
import SectionDetail from "@/app/components/hero-section/SectionDetail";
import SectionImage from "@/app/components/hero-section/SectionImage";
import Container from "@/app/components/Container";

const HeroSection = () => {
    return (
        <div className="bg-[#00544B] text-[#FFFFFF]">
            <Container>
                <div
                    className="grid grid-cols-1 lg:flex justify-between items-center gap-4 py-32">
                    <SectionDetail/>
                    <SectionImage/>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
