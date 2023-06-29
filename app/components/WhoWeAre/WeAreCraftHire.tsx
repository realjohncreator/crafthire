"use client";
import React from "react";
import Container from "@/app/components/Container";
import Arrow from "@/public/images/WhoWeAre/Arrow 22.png";
import Image from "next/image";
import TwoK from "@/public/images/WhoWeAre/2K+.png";
import TenK from "@/public/images/WhoWeAre/10Y.png";
import EightyTwoK from "@/public/images/WhoWeAre/82%.png";
import ThreeSixtyNineK from "@/public/images/WhoWeAre/369+.png";

const WeAreCraftHire = () => {
    return (
        <Container>
            <div className="flex lg:flex-row flex-col lg:gap-64 gap-10 py-40">
                <div className="flex flex-col lg:w-[465px] lg:h-[244px] gap-5">
                    <div>
                        <h1 className="text-[#002924] text-6xl">We Are CraftHire</h1>
                        <Image src={Arrow} alt="arrow" className="-mt-3"/>
                    </div>
                    <p className="font-light">
                        We are a skilled recruitment team that specialises in connecting businesses especially start ups
                        to the perfect team(s) for their project. Our primary objective is to provide exceptional and
                        personalised services that cater specifically to the needs of these companies.
                    </p>
                </div>

                <div className="flex flex-col lg:w-[499px] lg:h-[250px] gap-10 lg:mt-0 mt-10">
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-col gap-5">
                            <Image src={TwoK} alt="" className=""/>
                            <p className="font-light">
                                We have a wide range of talents, and we adapt our approach to suit each company.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <Image src={ThreeSixtyNineK} alt="" className=""/>
                            <p className="font-light">
                                Our tech teams have successfully work on 369 projects across the globe. </p>
                        </div>
                    </div>

                    <div className="flex flex-row lg:gap-24 gap-20">
                        <div className="flex flex-col gap-5">
                            <Image src={EightyTwoK} alt="" className=""/>
                            <p className="font-light">
                                Percentage of our client come back with more projects and connection.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <Image src={TenK} alt="" className=""/>
                            <p className="font-light">
                                You can trust the efficiency of our services even after 10 years. It can only get
                                better.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default WeAreCraftHire;
