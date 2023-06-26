"use client";
import React from "react";

const Copyright = () => {
    return (
        <div className="flex items-center gap-1 justify-center py-2">
            <h3>&copy; Copyright {new Date().getFullYear()}</h3>
            <h3>CraftHire LLC Privacy policy</h3>
        </div>
    );
};

export default Copyright;
