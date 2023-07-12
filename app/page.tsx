import React from "react";
import HeroSection from "@/app/components/hero-section/HeroSection";
import Categories from "@/app/components/tech-category/Categories";
import Main from "@/app/components/partners/Main";
import Connect from "@/app/components/connect/Connect";
import PartnershipTopTalent from "@/app/components/partnership-top-talent/PartnershipTopTalent";
import Testimonial from "@/app/components/testmonials/Testimonial";
import MainHowItWorks from "@/app/components/HowItWorks/MainHowItWorks";

const HomePage = () => {
    // throw new Error("Something went wrong");

    return (
        <div>
            <HeroSection/>
            <MainHowItWorks/>
            <Categories/>
            <Main/>
            <Connect/>
            <PartnershipTopTalent/>
            <Testimonial/>
        </div>
    );
};

export default HomePage;
