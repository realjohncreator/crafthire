"use client";
import React from "react";
import WorkImage from "@/public/images/WhoWeAre/Frame 1686560291.png";
import Image from "next/image";
import Container from "@/app/components/Container";

const HowItWorks = () => {
    return (
        <Container>
            <div className="lg:pt-14 py-6 flex flex-col items-center gap-8 justify-center">
                <h1 className="text-4xl font-semibold">How it Works</h1>
                <Image src={WorkImage} alt="work image"/>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-52 gap-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-lg">Sign Up and fill the requirements</h1>
                        <p className="font-light">
                            Click on the “Hire a team” button, sign <br/> up and fill the requirements that
                            follow <br/> suit.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-lg">Talk with a project manager</h1>
                        <p className="font-light">
                            At the last part of the form, you get to <br/> schedule a call with a project
                            manager <br/> to
                            talk further
                            on your project..
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-lg">Pick a team and start your project</h1>
                        <p className="font-light">
                            choose a team of your choice, make <br/>payment and start your project at <br/> once.
                        </p>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default HowItWorks;
