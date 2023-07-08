"use client";
import React from "react";
import PartnershipTopTalentText from "@/app/components/partnership-top-talent/PartnershipTopTalentText";
import PartnershipTopTalentImage from "@/app/components/partnership-top-talent/PartnershipTopTalentImage";
import Container from "@/app/components/Container";

const PartnershipTopTalent = () => {
    return (
        <div className="bg-[#F5FFFE]">
            <Container>
                <div className="lg:pt-20 pt-10 flex lg:flex-row flex-col items-center lg:gap-60">
                    <PartnershipTopTalentText/>
                    <PartnershipTopTalentImage/>
                </div>
            </Container>
        </div>
    );
};

export default PartnershipTopTalent;
