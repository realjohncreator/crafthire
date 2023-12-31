"use client";
import React, {useState} from "react";
import {categoriesData} from "@/app/components/tech-category/categoriesData";

const CategoriesInfo = () => {
    const [items, setItems] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState("");

    const filterItems = (categoryItem: string) => {
        let updatedItems = categoriesData;
        if (categoryItem !== "All") {
            updatedItems = categoriesData.filter((item) => item.category === categoryItem);
        }
        setItems(updatedItems);
        setSelectedCategory(categoryItem);
    };

    return (
        <>
            <div className="flex flex-col gap-1 lg:w-[970px] md:w-[770px] w-[339px] h-auto">
                <div
                    className="cursor-pointer font-bold flex-shrink-0 flex flex-row gap-4 lg:text-base text-sm whitespace-nowrap lg:overflow-hidden overflow-x-auto">
                    <h3 onClick={() => filterItems("All")}
                        className={`${selectedCategory === "All" ? "text-[#00544B] font-bold border-b-2 border-[#00544B]" : ""}`}>
                        All
                    </h3>
                    <h3 onClick={() => filterItems("Designers")}
                        className={`${selectedCategory === "Designers" ? "text-[#00544B] font-bold border-b-2 border-[#00544B]" : ""}`}>
                        Designers
                    </h3>
                    <h3 onClick={() => filterItems("Frontend")}
                        className={`${selectedCategory === "Frontend" ? "text-[#00544B] font-bold border-b-2 border-[#00544B]" : ""}`}>
                        Frontend
                    </h3>
                    <h3 onClick={() => filterItems("Backend")}
                        className={`${selectedCategory === "Backend" ? "text-[#00544B] font-bold border-b-2 border-[#00544B]" : ""}`}>
                        Backend
                    </h3>
                    <h3 onClick={() => filterItems("Web 3")}
                        className={`${selectedCategory === "Web 3" ? "text-[#00544B] font-bold border-b-2 border-[#00544B]" : ""}`}>
                        Web 3
                    </h3>
                    <h3 onClick={() => filterItems("Data scientist")}
                        className={`${selectedCategory === "Data scientist" ? "text-[#00544B] font-bold border-b-2 border-[#00544B]" : ""}`}>
                        Data scientist
                    </h3>
                    <h3 onClick={() => filterItems("Q/A Engineer")}
                        className={`${selectedCategory === "Q/A Engineer" ? "text-[#00544B] font-bold border-b-2 border-[#00544B]" : ""}`}>
                        Q/A Engineer
                    </h3>
                </div>

                {/*Main components*/}
                <div
                    className="flex justify-between items-center gap-4 my-10 py-2 overflow-x-auto">
                    {items.map((item) => {
                        const {image} = item;

                        return (
                            <div className="flex-shrink-0 object-cover"
                                 style={{height: "100%", display: "flex"}}>
                                {image && (
                                    <img
                                        src={image.src}
                                        alt="Category"
                                        style={{maxHeight: "100%", width: "auto", margin: "auto"}}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CategoriesInfo;
