import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import one from "@/public/images/testimonials/Ellipse 12.png";
import two from "@/public/images/testimonials/Ellipse 12 (1).png";
import three from "@/public/images/testimonials/Ellipse 12 (2).png";
import four from "@/public/images/testimonials/Ellipse 12 (3).png";
import five from "@/public/images/testimonials/Ellipse 12 (4).png";
import six from "@/public/images/testimonials/Ellipse 12 (5).png";
import seven from "@/public/images/testimonials/Ellipse 12 (6).png";
import quotation_mark from "@/public/images/testimonials/fa-solid_quote-right.png";
import line from "@/public/images/testimonials/Line 6.png";

export default class TestimonialSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            responsive: [
                {
                    breakpoint: 1024, // Breakpoint for desktop and larger screens
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768, // Breakpoint for tablets
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480, // Breakpoint for mobile devices
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    {/*first*/}
                    <div className="shadow-md rounded-2xl bg-white p-5 m-5">
                        <div className="flex flex-col gap-4">
                            <Image src={quotation_mark} className="w-[36px]" alt="quotation mark"/>
                            <p className="lg:w-[351px] w-[278px] lg:text-base text-xs font-light">
                                Working with CraftHire has been a game-changer for our company. Their top-tier tech
                                team
                                and excellent project management have ensured successful project delivery and
                                exceeded
                                our expectations. Thank you, craftHire!
                            </p>
                            <Image src={line} className="w-[144px]" alt="line"/>
                        </div>

                        <div className="flex flex-row gap-4 items-center mt-5">
                            <Image src={one} className="w-[78px] h-[78px]" alt="one"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Thomas Ekene</p>
                                <p className="font-light">CTO bedrock communications</p>
                            </div>
                        </div>
                    </div>

                    {/*second*/}
                    <div className="shadow-md rounded-2xl bg-white p-5 m-5">
                        <div className="flex flex-col gap-4">
                            <Image src={quotation_mark} className="w-[36px]" alt="quotation mark"/>
                            <p className="lg:w-[351px] w-[278px] lg:text-base text-xs font-light">
                                Working with CraftHire has been a game-changer for our company. Their top-tier tech
                                team
                                and excellent project management have ensured successful project delivery and
                                exceeded
                                our expectations. Thank you, craftHire!
                            </p>
                            <Image src={line} className="w-[144px]" alt="line"/>
                        </div>

                        <div className="flex flex-row gap-4 items-center mt-5">
                            <Image src={two} className="w-[78px] h-[78px]" alt="one"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Thomas Ekene</p>
                                <p className="font-light">CTO bedrock communications</p>
                            </div>
                        </div>
                    </div>

                    {/*third*/}
                    <div className="shadow-md rounded-2xl bg-white p-5 m-5">
                        <div className="flex flex-col gap-4">
                            <Image src={quotation_mark} className="w-[36px]" alt="quotation mark"/>
                            <p className="lg:w-[351px] w-[278px] lg:text-base text-xs font-light">
                                Working with CraftHire has been a game-changer for our company. Their top-tier tech
                                team
                                and excellent project management have ensured successful project delivery and
                                exceeded
                                our expectations. Thank you, craftHire!
                            </p>
                            <Image src={line} className="w-[144px]" alt="line"/>
                        </div>

                        <div className="flex flex-row gap-4 items-center mt-5">
                            <Image src={three} className="w-[78px] h-[78px]" alt="one"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Thomas Ekene</p>
                                <p className="font-light">CTO bedrock communications</p>
                            </div>
                        </div>
                    </div>

                    {/*fourth*/}
                    <div className="shadow-md rounded-2xl bg-white p-5 m-5">
                        <div className="flex flex-col gap-4">
                            <Image src={quotation_mark} className="w-[36px]" alt="quotation mark"/>
                            <p className="lg:w-[351px] w-[278px] lg:text-base text-xs font-light">
                                Working with CraftHire has been a game-changer for our company. Their top-tier tech
                                team
                                and excellent project management have ensured successful project delivery and
                                exceeded
                                our expectations. Thank you, craftHire!
                            </p>
                            <Image src={line} className="w-[144px]" alt="line"/>
                        </div>

                        <div className="flex flex-row gap-4 items-center mt-5">
                            <Image src={four} className="w-[78px] h-[78px]" alt="one"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Thomas Ekene</p>
                                <p className="font-light">CTO bedrock communications</p>
                            </div>
                        </div>
                    </div>

                    {/*fifth*/}
                    <div className="shadow-md rounded-2xl bg-white p-5 m-5">
                        <div className="flex flex-col gap-4">
                            <Image src={quotation_mark} className="w-[36px]" alt="quotation mark"/>
                            <p className="lg:w-[351px] w-[278px] lg:text-base text-xs font-light">
                                Working with CraftHire has been a game-changer for our company. Their top-tier tech
                                team
                                and excellent project management have ensured successful project delivery and
                                exceeded
                                our expectations. Thank you, craftHire!
                            </p>
                            <Image src={line} className="w-[144px]" alt="line"/>
                        </div>

                        <div className="flex flex-row gap-4 items-center mt-5">
                            <Image src={five} className="w-[78px] h-[78px]" alt="one"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Thomas Ekene</p>
                                <p className="font-light">CTO bedrock communications</p>
                            </div>
                        </div>
                    </div>

                    {/*sixth*/}
                    <div className="shadow-md rounded-2xl bg-white p-5 m-5">
                        <div className="flex flex-col gap-4">
                            <Image src={quotation_mark} className="w-[36px]" alt="quotation mark"/>
                            <p className="lg:w-[351px] w-[278px] lg:text-base text-xs font-light">
                                Working with CraftHire has been a game-changer for our company. Their top-tier tech
                                team
                                and excellent project management have ensured successful project delivery and
                                exceeded
                                our expectations. Thank you, craftHire!
                            </p>
                            <Image src={line} className="w-[144px]" alt="line"/>
                        </div>

                        <div className="flex flex-row gap-4 items-center mt-5">
                            <Image src={six} className="w-[78px] h-[78px]" alt="one"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Thomas Ekene</p>
                                <p className="font-light">CTO bedrock communications</p>
                            </div>
                        </div>
                    </div>

                    {/*seventh*/}
                    <div className="shadow-md rounded-2xl bg-white p-5 m-5">
                        <div className="flex flex-col gap-4">
                            <Image src={quotation_mark} className="w-[36px]" alt="quotation mark"/>
                            <p className="lg:w-[351px] w-[278px] lg:text-base text-xs font-light">
                                Working with CraftHire has been a game-changer for our company. Their top-tier tech
                                team
                                and excellent project management have ensured successful project delivery and
                                exceeded
                                our expectations. Thank you, craftHire!
                            </p>
                            <Image src={line} className="w-[144px]" alt="line"/>
                        </div>

                        <div className="flex flex-row gap-4 items-center mt-5">
                            <Image src={seven} className="w-[78px] h-[78px]" alt="one"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Thomas Ekene</p>
                                <p className="font-light">CTO bedrock communications</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
