"use client";
import React from "react";
import WithDashboardDetails from "@/app/components/connect/with-dashboard/WithDashboardDetails";
import WithDashboardImage from "@/app/components/connect/with-dashboard/WithDashboardImage";
import Container from "@/app/components/Container";

const WithDashboard = () => {
    return (
        <Container>
            <div className="flex md:flex-row flex-col items-center lg:py-20 py-10 lg:gap-40 md:gap-40 gap-20">
                <WithDashboardDetails/>
                <WithDashboardImage/>
            </div>
        </Container>
    );
};

export default WithDashboard;
