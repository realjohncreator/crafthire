"use client";
import circle from "@/public/images/connect/circle.png";
import small_circle from "@/public/images/connect/small-circle.png";
import Image from "next/image";
import {useState, useEffect} from "react";
import Container from "@/app/components/Container";

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
        <Container>
            <div className="w-[660px] h-[660px]">
                {screenSize === "large" ? (
                    <Image className="object-cover w-full" src={circle} alt="Connection Circle"/>
                ) : (
                    <Image
                        className="mx-7 mt-20"
                        src={small_circle}
                        alt="Small Connection Circle"
                    />
                )}
            </div>
        </Container>
    );
};

export default ConnectOscillator;
