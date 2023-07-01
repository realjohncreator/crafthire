"use client";
import React from "react";
import PartnershipTopTalentText from "@/app/components/partnership-top-talent/PartnershipTopTalentText";
import PartnershipTopTalentImage from "@/app/components/partnership-top-talent/PartnershipTopTalentImage";
import Container from "@/app/components/Container";

const PartnershipTopTalent = () => {
    return (
        <Container>
            <div className="flex lg:flex-row flex-col items-center lg:gap-40">
                <PartnershipTopTalentText/>
                <PartnershipTopTalentImage/>
            </div>
        </Container>
    );
};

export default PartnershipTopTalent;
