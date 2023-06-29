"use client";
import React from "react";
import CategoryDescription from "@/app/components/tech-category/CategoryDescription";
import CategoriesInfo from "@/app/components/tech-category/CategoriesInfo";

const Categories = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-10 items-center">
            <CategoryDescription/>
            <CategoriesInfo selected/>
        </div>
    );
};
export default Categories;