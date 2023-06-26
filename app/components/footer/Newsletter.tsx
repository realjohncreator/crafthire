"use client";
import React from "react";

const Newsletter = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Newsletter</h1>
            <ul className="text-sm leading-6 font-light">
                <li>Join our community and be the first to know of any update</li>
            </ul>

            <div className="flex flex-row">
                <input type="text"
                       className="border border-gray-300 focus:outline-none text-[#212121] rounded-l-md px-4 py-2"
                       placeholder="Enter company's email..."/>
                <button className="bg-[#FFCC00] text-[#212121] font-semibold rounded-r-md px-4 py-2">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;
