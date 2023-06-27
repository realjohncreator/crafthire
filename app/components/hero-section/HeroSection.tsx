"use client";
import React from "react";
import SectionDetail from "@/app/components/hero-section/SectionDetail";
import SectionImage from "@/app/components/hero-section/SectionImage";
import Container from "@/app/components/Container";

const HeroSection = () => {
    return (
        <div className="bg-[#00544B] text-[#FFFFFF]">
            <Container>
                <div className="grid grid-cols-1 lg:flex justify-between gap-4 lg:py-14 py-2">
                    <SectionDetail/>
                    <SectionImage/>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
