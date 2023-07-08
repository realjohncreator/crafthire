"use client";
import React, {useState} from "react";
import Image from "next/image";
import background from "@/public/images/Rectangle 2252.png";
import {FcGoogle} from "react-icons/fc";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import Link from "next/link";
import Container from "@/app/components/Container";
import Strokes from "@/app/components/auth/login/Strokes";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(false);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordError(false);
    };

    const handleSignIn = () => {
        if (email === "") {
            setEmailError(true);
        }
        if (password === "") {
            setPasswordError(true);
        }

        // Reset the input fields
        setEmail("");
        setPassword("");
    };

    return (
        <div className="bg-[#F5FFFE] flex items-center justify-center p-10">
            <Container>
                <div className="bg-[#F5FFFE]">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold text-center">Sign in to Crafthire</h1>

                        <div className="flex flex-col items-center justify-center mt-10 gap-10">
                            <div
                                className="flex flex-row items-center justify-center gap-5 my-3 py-3 font-bold md:w-[438px] w-[380px] border border-gray-200 rounded-md">
                                <FcGoogle/>
                                <h2 className="cursor-pointer">Sign in with Google</h2>
                            </div>

                            <div className="flex justify-center items-center mb-3 font-bold">Or</div>

                            <div
                                className="flex flex-col gap-5 border border-gray-200 rounded-md p-5 md:w-[438px] w-[380px]">
                                <div className={`flex flex-col gap-1 ${emailError ? "border-b border-red-500" : ""}`}>
                                    <label htmlFor="email" className="font-bold">Enter your email</label>
                                    <input
                                        type="email"
                                        className={`border-b border-b-gray-200 bg-inherit focus:border-b-gray-500 px-1 py-2 focus:outline-none ${
                                            emailError ? "border-red-500" : ""
                                        }`}
                                        placeholder="alex_manager@gmail.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>

                                <div
                                    className={`flex flex-col gap-1 relative ${passwordError ? "border-b border-red-500" : ""}`}>
                                    <label htmlFor="password" className="font-bold">Set a password</label>
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        className={`border-b border-b-gray-200 bg-inherit focus:border-b-gray-500 px-1 py-2 focus:outline-none ${
                                            passwordError ? "border-red-500" : ""
                                        }`}
                                        placeholder="enter your password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    {passwordVisible ? (
                                        <AiFillEyeInvisible
                                            className="absolute top-10 lg:left-80 left-60 text-gray-400 cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        />
                                    ) : (
                                        <AiFillEye
                                            className="absolute top-10 lg:left-80 left-60 text-gray-400 cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        />
                                    )}
                                </div>

                                <Link href="/">
                                    <p className="hover:text-[#00544B] transition duration-300 font-bold whitespace-nowrap">
                                        Forgot password?
                                    </p>
                                </Link>
                            </div>

                            <div
                                className="bg-[#00544B] text-white rounded-md w-full flex justify-center py-3 font-bold">
                                <button onClick={handleSignIn}>Sign in</button>
                            </div>

                            <p className="flex flex-row items-center justify-center gap-1 font-bold">
                                Don’t have an account?
                                <Link href="pages/auth/register"
                                      className="hover:text-[#00544B] transition duration-300">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
