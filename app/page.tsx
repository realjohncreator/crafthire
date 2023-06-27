import React from "react";
import HeroSection from "@/app/components/hero-section/HeroSection";
import HowItWorks from "@/app/components/WhoWeAre/HowItWorks";
import WeAreCraftHire from "@/app/components/WhoWeAre/WeAreCraftHire";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HowItWorks/>
            <WeAreCraftHire/>
        </div>
    );
};

export default HomePage;
