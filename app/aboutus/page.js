"use client";

import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";

export default function AboutUs() {

    const fstcard = "https://restan-nextjs.vercel.app/assets/img/shape/5.jpg";  
    const restan = "https://img.youtube.com/vi/F3zw1Gvn4Mk/maxresdefault.jpg";

    {/*NAV BAR LOGIC */}
      const [navColor, setNavColor] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setNavColor(false);
          } else {
            setNavColor(true);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    {/*NAV BAR LOGIC END*/}

    return (
        <div className="w-full h-full text-black dark:text-white bg-[#FEFEFE] dark:bg-[#1B1B1B]">
            {/* Above Nav Card */}
            {!navColor &&
                <div className="w-full h-10 fixed border-b-1 border-white/50 flex flex-row items-center px-20 justify-between bg-[#826A45] text-white text-xl">
                    <div className="flex flex-row w-[30%] justify-around gap-5">
                        <h1>Phone:+91XXXXXXXXXX</h1>
                        <h1>Email:food@restan.com</h1>
                    </div>
                    <div>
                        <h1>175 10h Street, Office 375 Berlin, De 21562</h1>
                    </div>
                </div>
            }

            {/* Nav Card */}
            <div className={`w-full h-auto flex flex-row justify-around items-center p-7 z-20 fixed ${navColor ? "bg-[#FFFFFF] dark:bg-black/60 dark:backdrop-blur-md dark:text-white top-0 left-0 mt-0 text-black" : "bg-transparent mt-10 text-white"} border-b-2 border-[#1E1E1E]`}>
                
                {/* left Nav Card */}
                <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
                className={`w-auto h-20 ${navColor ? "invert dark:invert-0" : ""}`}
                >
                </img>
                {/* mid Nav Card */}
                <div className="w-auto h-auto flex flex-row text-xl font-bold gap-10 justify-evenly items-center">
                <button>Home</button>
                <button>Pages</button>
                <button>Menu</button>
                <button>Blog</button>
                <button>Shop</button>
                </div>

                <div className="w-auto h-auto flex flex-row text-xl font-bold gap-5 justify-evenly items-center">
                <button className={`bg-[#FCFCFC] w-15 h-15 flex justify-center items-center rounded-full ${navColor ? "bg-black" : ""}`}>
                    <img
                    src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
                    className={`w-8 ${navColor ? "invert" : ""}`}>
                    </img>
                </button>
                <button className={`border-white border-2 py-5 px-15 ${navColor ? "bg-[#826A45] text-white rounded-full" : ""}`}>Reservation</button>
                </div>

            </div>

            {/* First Crad */}
            <div className="w-full h-[80vh] text-white" style={{backgroundImage: `url(${fstcard})`}}>
                <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-san mt-40">About Us</h1>
                    <h1 className="font-san text-xl mt-5">Home &gt; about us</h1>
                </div>
            </div>

            {/* 2nd Crad */}
            <div className="w-full h-[56vh] flex flex-col justify-center items-center p-20 bg-[#EBE9E6] dark:bg-[#262525]">
                <h1 className="text-2xl font-mono font-bold text-[#826A45] dark:text-white mt-30">OUR TRUSTED 8K HAPPY PARTNER</h1>

                <div className="w-full h-fit flex flex-row mt-10 items-center justify-between px-20">
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
                    className="w-1/7 h-auto p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
                    className="w-1/7 h-auto p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
                    className="w-1/7 h-auto p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
                    className="w-1/7 h-auto p-5">
                    </img>
                    <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"
                    className="w-1/7 h-auto p-5">
                    </img>
                </div>
            </div>

            {/* 3rd Crad */}
            <div className="w-full h-fit py-25">
                <div className="w-full h-[80vh] flex flex-row gap-10">
                    <div className="w-[25%] h-full overflow-hidden">
                        <img
                            src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[25%] h-full overflow-hidden">
                        <img
                            src="https://restan-nextjs.vercel.app/assets/img/about/3.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right side - content */}
                    <div className="w-[50%] h-fit flex flex-col justify-center p-20 bg-[#FFFFFF] dark:bg-[#262525] shadow-2xl relative top-30 right-30">
                        <h1 className="text-[#826A45] font-serif text-lg tracking-widest mb-3">
                        ABOUT US
                        </h1>
                        <h1 className="text-6xl font-bold leading-snug mb-6">
                        We Invite You <br /> To Visit Our Restaurant
                        </h1>
                        <p className="text-gray-600 dark:text-white/50 text-lg leading-relaxed w-[80%]">
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
            <div className="w-full h-fit bg-[#EBE9E6] dark:bg-[#262525] flex flex-col items-center px-50 py-20 mt-50">
                <p className="text-xl text-[#826A45] font-bold font-serif">MASTER CHEFS</p>
                <h1 className="text-5xl font-serif font-bold mt-3">Meet Our Special Chefs</h1>

                <div className="w-fit h-full flex flex-row gap-40 mt-10 mb-10">

                {/* 1st Chef */}
                <div className="w-full h-full flex flex-col items-center relative">
                    <div className="relative h-fit p-5 border-2 border-black dark:border-white rounded-full z-10">
                    <img
                        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=1920&q=75"
                        className="w-100 rounded-full"
                    />
                    </div>
                    {/* Overlapping name bar */}
                    <div className="bg-[#826A45] w-80 h-22 text-white flex justify-center items-center flex-col mt-[-100px] z-20">
                    <h1 className="text-2xl">Alexander Petllo</h1>
                    <h1 className="">ASSISTANT CHEF</h1>
                    </div>
                </div>

                {/* 2nd Chef */}
                <div className="w-full h-full flex flex-col items-center relative">
                    <div className="relative h-fit p-5 border-2 border-black dark:border-white rounded-full z-10">
                    <img
                        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=1920&q=75"
                        className="w-100 rounded-full"
                    />
                    </div>
                    <div className="bg-[#826A45] w-80 h-22 text-white flex justify-center items-center flex-col mt-[-100px] z-20">
                    <h1 className="text-2xl">Mendia Juxef</h1>
                    <h1 className="">BURGER KING</h1>
                    </div>
                </div>

                {/* 3rd Chef */}
                <div className="w-full h-full flex flex-col items-center relative">
                    <div className="relative h-fit p-5 border-2 border-black dark:border-white rounded-full z-10">
                    <img
                        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=1920&q=75"
                        className="w-100 rounded-full"
                    />
                    </div>
                    <div className="bg-[#826A45] w-80 h-22 text-white flex justify-center items-center flex-col mt-[-100px] z-20">
                    <h1 className="text-2xl">Petro William</h1>
                    <h1 className="">MAIN CHEF</h1>
                    </div>
                </div>

                </div>
            </div>

            {/* Restan card // 5th Crad */}
            <div className="w-full h-fit flex flex-col p-30">
                <h1 className="text-9xl font-bold font-serif text-black/5">RESTAN</h1>
                <div className="w-full h-full flex flex-row relative">
                <div className="bg-amber-300 w-[60%] h-115 bg-cover bg-center" style={{backgroundImage: `url(${restan})`}}></div>
                <div className="bg-white dark:bg-[#262525] shadow-2xl w-[50%] h-fit absolute bottom-30 right-0 z-10 p-20">
                    <h1 className="text-3xl font-bold">Opening Hours</h1>
                    <h1 className="mt-5 text-[#6D6D6D]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..</h1>
                    <h1 className="font-bold mt-10">Sunday to Tuesday: 10:00 - 09:00</h1>
                    <h1 className="font-bold mt-5">Wednesday to Thursday: 11:30 - 10:30</h1>
                    <h1 className="font-bold mt-5">Friday & Saturday: 10:30 - 12:00</h1>
                    <div className="flex flex-row items-center space-x-4">
                    <img
                    src="https://cdn-icons-png.flaticon.com/128/3178/3178167.png"
                    className="w-18 mt-5 bg-[#826A45] rounded-full p-2"
                    ></img>
                    <div>
                        <h1 className="text-[#666666]">Call Anytime</h1>
                        <h1 className="text-2xl font-bold">+964733-378901</h1>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Footer // 6th Crad */}
            <Footer />

        </div>
    );
}