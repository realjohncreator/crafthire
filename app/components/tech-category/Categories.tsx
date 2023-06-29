"use client";
import React from "react";
import CategoryDescription from "@/app/components/tech-category/CategoryDescription";
import Container from "@/app/components/Container";
import CategoriesInfo from "@/app/components/tech-category/CategoriesInfo";

const Categories = () => {
    return (
        <Container>
            <div className="flex lg:flex-row flex-col gap-10 items-center">
                <CategoryDescription/>
                <CategoriesInfo selected/>
            </div>
        </Container>
    );
};
export default Categories;
