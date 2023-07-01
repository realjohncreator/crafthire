import React from "react";
import HeroSection from "@/app/components/hero-section/HeroSection";
import HowItWorks from "@/app/components/WhoWeAre/HowItWorks";
import WeAreCraftHire from "@/app/components/WhoWeAre/WeAreCraftHire";
import Categories from "@/app/components/tech-category/Categories";
import Partners from "@/app/components/partners/Partners";
import Main from "@/app/components/partners/Main";
import Connect from "@/app/components/connect/Connect";
import PartnershipTopTalent from "@/app/components/partnership-top-talent/PartnershipTopTalent";
import Testimonial from "@/app/components/testmonials/Testimonial";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HowItWorks/>
            <WeAreCraftHire/>
            <Categories/>
            <Main/>
            <Connect/>
            <PartnershipTopTalent/>
            <Testimonial/>
        </div>
    );
};

export default HomePage;
