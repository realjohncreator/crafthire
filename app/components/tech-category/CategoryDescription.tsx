"use client";
import React from "react";
import Container from "@/app/components/Container";

const CategoryDescription = () => {
    return (
        <Container>
            <div className="flex flex-col gap-5">
                <h1 className="lg:text-4xl text-2xl text-[#002924]">Our Top-Tier <br/> Talents</h1>
                <p className="text-[#424242] font-light">
                    Our rookies are best at what they do. Their enthusiasm, talent, and fresh mind makes them
                    easily adaptable to your company’s project.
                </p>
            </div>
        </Container>
    );
};

export default CategoryDescription;
