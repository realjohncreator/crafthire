import React from "react";

export default function AuthLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center md:py-40 py-20 h-full">
            {children}
        </div>
    );
}
