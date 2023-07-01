"use client";
import React from "react";
import connectImg from "@/public/images/connect/Ellipse 12.png";
import Image from "next/image";
import Container from "@/app/components/Container";

const ConnectDetail = () => {
    return (
        <Container>
            <div className="lg:w-[569px] w-[331px] flex flex-col gap-14 lg:items-start items-center">
                <div className="flex flex-col gap-4 lg:pt-0 pt-10">
                    <h1 className="lg:text-4xl text-2xl font-light">
                        Connect and <br/> collaborate with our <br/>
                        <span className="font-bold">Communication Tools</span>
                    </h1>
                    <p className="font-bold lg:text-lg text-sm">
                        From instant messaging to video calls, our tools empower you to build bridges and create
                        magic, no matter where you are.
                    </p>
                </div>

                <div className="flex flex-row items-center gap-3 lg:px-5 px-0 lg:w-[524px] w-[331px]">
                    <Image src={connectImg} className="object-cover w-20 h-20" alt="connect image"/>
                    <p className="font-light lg:text-lg text-sm">
                        "The communication tool from CraftHire is pure magic. We share ideas, laughter, and
                        triumphs effortlessly, fuelling our projects with creativity and passion." <br/>
                        <span className="font-bold">- Emily, CEO of SparkTech.</span>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default ConnectDetail;
