"use client";
import parodos from "@/public/images/Partners/image 14.png";
import hauwei from "@/public/images/Partners/image 24.png";
import propel from "@/public/images/Partners/image 15.png";
import ocelto from "@/public/images/Partners/image 17.png";
import code_exceptional from "@/public/images/Partners/image 22.png";
import shopify from "@/public/images/Partners/image 21.png";
import Image from "next/image";
import React, {Component} from "react";
import Container from "@/app/components/Container";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Partners extends Component {
    render() {
        const settings = {
            dots: false, // Show dots
            infinite: true, // Allow infinite looping
            autoplay: true, // Enable automatic sliding
            autoplaySpeed: 2000, // Set the duration between slides in milliseconds
            speed: 500, // Transition speed between slides in milliseconds
            slidesToShow: 6, // Number of slides to show at once
            slidesToScroll: 1,// Number of slides to scroll when navigating
            vertical: false, // Allow horizontal or vertical scrolling
            responsive: [
                {
                    breakpoint: 768, // Breakpoint for small screens
                    settings: {
                        slidesToShow: 4,
                    },
                },
            ]
        };

        return (
            <Container>
                <div>
                    <Slider {...settings}>
                        <div>
                            <Image src={parodos} alt="parodos"/>
                        </div>
                        <div>
                            <Image src={hauwei} alt="hauwei"/>
                        </div>
                        <div>
                            <Image src={propel} alt="propel"/>
                        </div>
                        <div>
                            <Image src={ocelto} alt="ocelto"/>
                        </div>
                        <div>
                            <Image src={code_exceptional} alt="code_exceptional"/>
                        </div>
                        <div>
                            <Image src={shopify} alt="shopify"/>
                        </div>
                        <div>
                            <Image src={hauwei} alt="hauwei"/>
                        </div>
                    </Slider>
                </div>
            </Container>
        );
    }
}
