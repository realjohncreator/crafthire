"use client";
import React from "react";
import Container from "@/app/components/Container";
import Talents from "@/app/components/footer/Talents";
import AboutUs from "@/app/components/footer/AboutUs";
import ContactUs from "@/app/components/footer/ContactUs";
import Newsletter from "@/app/components/footer/Newsletter";
import LogoSocials from "@/app/components/footer/LogoSocials";
import Copyright from "@/app/components/footer/Copyright";

const Footer = () => {
    return (
        <div className="bg-[#002924] text-[#FFFFFF]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-6 py-4">
                    <Talents/>
                    <AboutUs/>
                    <ContactUs/>
                    <Newsletter/>
                </div>

                <hr/>

                <div className="p-6">
                    <LogoSocials/>
                </div>

                <hr/>

                <Copyright/>
            </Container>
        </div>
    );
};

export default Footer;
