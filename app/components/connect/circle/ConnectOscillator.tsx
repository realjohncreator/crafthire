"use client";
import circle from "@/public/images/connect/circle.png";
import small_circle from "@/public/images/connect/small-circle.png";
import Image from "next/image";
import {useState, useEffect} from "react";

const ConnectOscillator = () => {
    const [screenSize, setScreenSize] = useState("large");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("small");
            } else {
                setScreenSize("large");
            }
        };

        handleResize(); // Set initial screen size
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="max-w-[2520px] mx-auto xl:mr-0 w-[660px]">
            {screenSize === "large" ? (
                <Image className="object-cover w-full" src={circle} alt="Connection Circle"/>
            ) : (
                <Image
                    className="mx-7 w-[300px] h-[304px] mt-20"
                    src={small_circle}
                    alt="Small Connection Circle"
                />
            )}
        </div>
    );
};

export default ConnectOscillator;
