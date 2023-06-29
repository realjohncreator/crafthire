import React from "react";
import HeroSection from "@/app/components/hero-section/HeroSection";
import HowItWorks from "@/app/components/WhoWeAre/HowItWorks";
import WeAreCraftHire from "@/app/components/WhoWeAre/WeAreCraftHire";
import Categories from "@/app/components/tech-category/Categories";
import CategorySlider from "@/app/components/tech-category/CategorySlider";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HowItWorks/>
            <WeAreCraftHire/>
            <Categories/>
            {/*<CategorySlider selected/>*/}
        </div>
    );
};

export default HomePage;
