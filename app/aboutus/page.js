"use client";

import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Chef from "../Components/Chef";
import OpeningHours from "../Components/OpeningHours";

export default function AboutUs() {

    const fstcard = "https://restan-nextjs.vercel.app/assets/img/shape/5.jpg";  
    const restan = "https://img.youtube.com/vi/F3zw1Gvn4Mk/maxresdefault.jpg";

    return (
        <div className="w-full h-full text-black dark:text-white bg-[#FEFEFE] dark:bg-[#1B1B1B] overflow-x-hidden">
            
            {/* Navbar Component */}
            <Navbar />

            {/* First Crad */}
            <div className="w-full h-[50vh] md:h-[80vh] text-white bg-cover bg-center" style={{backgroundImage: `url(${fstcard})`}}>
                <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-san mt-20 md:mt-40">About Us</h1>
                    <h1 className="font-san text-xl mt-5">Home &gt; about us</h1>
                </div>
            </div>

            {/* 2nd Crad */}
            <div className="w-full h-fit md:h-[56vh] flex flex-col justify-center items-center p-5 md:p-20 bg-[#EBE9E6] dark:bg-[#262525]">
                <h1 className="text-xl md:text-2xl font-mono font-bold text-[#826A45] dark:text-white mt-10 md:mt-30 text-center">OUR TRUSTED 8K HAPPY PARTNER</h1>

                <div className="w-full h-fit flex flex-wrap md:flex-row mt-10 items-center justify-center md:justify-between px-5 md:px-20 gap-5 md:gap-0">
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
                    className="w-[40%] md:w-1/7 h-auto p-2 md:p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
                    className="w-[40%] md:w-1/7 h-auto p-2 md:p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
                    className="w-[40%] md:w-1/7 h-auto p-2 md:p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
                    className="w-[40%] md:w-1/7 h-auto p-2 md:p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"
                    className="w-[40%] md:w-1/7 h-auto p-2 md:p-5">
                    </img>
                </div>
            </div>

            {/* 3rd Crad */}
            <div className="w-full h-fit py-10 md:py-25 md:mb-60">
                <div className="w-full h-fit md:h-[80vh] flex flex-col md:flex-row gap-5 md:gap-10">
                    <div className="w-full md:w-[25%] h-60 md:h-full overflow-hidden">
                        <img
                            src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-[25%] h-60 md:h-full overflow-hidden">
                        <img
                            src="https://restan-nextjs.vercel.app/assets/img/about/3.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right side - content */}
                    <div className="w-full md:w-[50%] h-fit flex flex-col justify-center p-5 md:p-20 bg-[#FFFFFF] dark:bg-[#262525] shadow-xl md:shadow-2xl relative top-0 right-0 md:top-30 md:right-30">
                        <h1 className="text-[#826A45] font-serif text-lg tracking-widest mb-3">
                        ABOUT US
                        </h1>
                        <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-6">
                        We Invite You <br /> To Visit Our Restaurant
                        </h1>
                        <p className="text-gray-600 dark:text-white/50 text-base md:text-lg leading-relaxed w-full md:w-[80%]">
                        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
                        The Patio Time Bar opens in the center of Florence. The only bar inspired
                        by the 1960s, it will give you an experience that you’ll have a hard time forgetting.
                        </p>
                        <button className="mt-10 bg-[#826A45] text-white px-10 py-4 text-xl font-semibold rounded-md w-fit hover:bg-[#9b7b4d] transition-all">
                        Discover More
                        </button>
                    </div>

                </div>

            </div>

            {/* Chef Page // 7th Card */}
            <Chef/>

            {/* Restan card // 5th Crad */}
            <OpeningHours />

            {/* Footer // 6th Crad */}
            <Footer />

        </div>
    );
}