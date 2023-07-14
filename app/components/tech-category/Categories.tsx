"use client";
import React from "react";
import CategoryDescription from "@/app/components/tech-category/CategoryDescription";
import CategoriesInfo from "@/app/components/tech-category/CategoriesInfo";
import Container from "@/app/components/Container";

const Categories = () => {
    return (
        <div className="bg-[#F5FFFE]">
            <Container>
                <div className="flex lg:flex-row flex-col gap-10 items-center">
                    <CategoryDescription/>
                    <CategoriesInfo/>
                </div>
            </Container>
        </div>
    );
};

export default Categories;
