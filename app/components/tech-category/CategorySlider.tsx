"use client";
import React, {useState} from "react";
import Container from "@/app/components/Container";
import Slider from "react-slick";
import {categoriesData} from "@/app/components/tech-category/categoriesData";

interface ICategoriesInfo {
    selected: boolean;
}

const CategoriesInfo: React.FC<ICategoriesInfo> = ({selected}) => {
    const [items, setItems] = useState(categoriesData);

    const filterItems = (categoryItem: string) => {
        const updatedItems = categoriesData.filter(
            (item) => item.category === categoryItem
        );
        setItems(updatedItems);
    };

    return (
        <Container>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-4">
                    <h3 onClick={() => setItems(categoriesData)}>All</h3>
                    <h3
                        onClick={() => filterItems("Designers")}
                        className={selected ? "selected" : ""}
                    >
                        Designers
                    </h3>
                    <h3 onClick={() => filterItems("Frontend")}>Frontend</h3>
                    <h3 onClick={() => filterItems("Backend")}>Backend</h3>
                    <h3 onClick={() => filterItems("Web 3")}>Web 3</h3>
                    <h3 onClick={() => filterItems("Data scientist")}>Data scientist</h3>
                    <h3 onClick={() => filterItems("Q/A Engineer")}>Q/A Engineer</h3>
                </div>

                <div className="">

                </div>
            </div>
        </Container>
    );
};

export default CategoriesInfo;
