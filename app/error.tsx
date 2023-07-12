"use client";
import React, {useEffect} from "react";
import errorImage from "@/public/images/error/Asset 1 1.png";
import Image from "next/image";

interface IErrorState {
    error: Error;
}

const ErrorState: React.FC<IErrorState> = ({error}) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="flex flex-col mx-auto">
            <h1 className="font-bold text-4xl w-[793px]">We Can’t Seem to Find That Page</h1>
            <div>
                <Image src={errorImage} className="w-[295px]" alt="error image"/>
            </div>

            <div>
                <p className="w-[472px]">
                    Hi, Developers call it 404.. but don't worry
                    is just a slight issue.. our team are on it already.
                    In the meantime, check out our FAQ.
                </p>
            </div>

            <div className="bg-[#00544B] text-white p-2 rounded-md mt-4 w-[253px] text-center">
                <button>Take me to FAQ</button>
            </div>
        </div>
    );
};

export default ErrorState;
