import React from "react";
import HeroSection from "@/app/components/hero-section/HeroSection";
import HowItWorks from "@/app/components/WhoWeAre/HowItWorks";
import WeAreCraftHire from "@/app/components/WhoWeAre/WeAreCraftHire";
import Categories from "@/app/components/tech-category/Categories";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HowItWorks/>
            <WeAreCraftHire/>
            <Categories/>
        </div>
    );
};

export default HomePage;
