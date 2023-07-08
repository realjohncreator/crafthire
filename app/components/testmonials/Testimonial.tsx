"use client";
import React from "react";
import Container from "@/app/components/Container";
import Heading from "@/app/components/testmonials/Heading";
import TestimonialSlider from "@/app/components/testmonials/TestimonialSlider";

const Testimonial = () => {
    return (
        <div className="bg-[#F5FFFE]">
            <Container>
                <div className="flex flex-col lg:gap-10 gap-5 lg:py-32">
                    <Heading/>
                    <TestimonialSlider/>
                </div>
            </Container>
        </div>
    );
};

export default Testimonial;
