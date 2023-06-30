import React from "react";
import HeroSection from "@/app/components/hero-section/HeroSection";
import HowItWorks from "@/app/components/WhoWeAre/HowItWorks";
import WeAreCraftHire from "@/app/components/WhoWeAre/WeAreCraftHire";
import Categories from "@/app/components/tech-category/Categories";
import Partners from "@/app/components/partners/Partners";
import Main from "@/app/components/partners/Main";
import Connect from "@/app/components/connect/Connect";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HowItWorks/>
            <WeAreCraftHire/>
            <Categories/>
            <Main/>
            <Connect/>
        </div>
    );
};

export default HomePage;
