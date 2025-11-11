"use client";

import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";

export default function ContactUs() {

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
                    <h1 className="text-6xl font-san mt-40">Contact Us</h1>
                    <h1 className="font-san text-xl mt-5">Home &gt; contact us</h1>
                </div>
            </div>

            {/* 2nd card, info card */}
            <div className="w-full h-[50vh] flex flex-row justify-center items-center px-40 gap-10 mt-20">

            {/* Hotline Card */}
            <div className="w-[30%] h-[60%] border border-gray-200 rounded-2xl flex flex-col justify-center items-center shadow-md">
                <img
                src="https://cdn-icons-png.flaticon.com/128/597/597177.png"
                alt="phone"
                className="w-16 h-16 mb-5"
                />
                <h1 className="text-2xl font-bold mb-2">Hotline</h1>
                <p className="text-lg dark:text-white/50">+4733378901</p>
            </div>

            {/* Location Card */}
            <div className="w-[30%] h-[60%] border border-gray-200 rounded-2xl flex flex-col justify-center items-center shadow-md">
                <img
                src="https://cdn-icons-png.flaticon.com/128/854/854878.png"
                alt="location"
                className="w-16 h-16 mb-5"
                />
                <h1 className="text-2xl font-bold mb-2">Our Location</h1>
                <p className="text-lg dark:text-white/50 text-center w-[80%]">
                55 Main Street, The Grand Avenue 2nd Block, New York City
                </p>
            </div>

            {/* Email Card */}
            <div className="w-[30%] h-[60%] border border-gray-200 rounded-2xl flex flex-col justify-center items-center shadow-md">
                <img
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                alt="email"
                className="w-16 h-16 mb-5"
                />
                <h1 className="text-2xl font-bold mb-2">Official Email</h1>
                <p className="text-lg dark:text-white/50">info@restan.com</p>
            </div>

            </div>
            
            {/* 3rd card, fedback form */}
            <div className="w-full h-[90vh] flex flex-col justify-center items-center px-40">
            
                <div className="w-[70%] bg-white dark:bg-[#262525] shadow-2xl rounded-2xl p-20 flex flex-col justify-center">
                    {/* Title */}
                    <div className="text-center mb-10">
                    <h1 className="text-[#826A45] font-serif text-lg tracking-widest">
                        ─── KEEP IN TOUCH ───
                    </h1>
                    <h1 className="text-5xl font-bold mt-3">Send us a Message</h1>
                    </div>

                    {/* Input Fields */}
                    <div className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 rounded-md p-4 bg-[#F8F8F8] text-black text-lg focus:outline-none"
                    />

                    <div className="flex flex-row gap-5">
                        <input
                        type="email"
                        placeholder="Email*"
                        className="w-1/2 border border-gray-300 rounded-md p-4 bg-[#F8F8F8] text-black text-lg focus:outline-none"
                        />
                        <input
                        type="text"
                        placeholder="Phone"
                        className="w-1/2 border border-gray-300 rounded-md p-4 bg-[#F8F8F8] text-black text-lg focus:outline-none"
                        />
                    </div>

                    <textarea
                        placeholder="Your Message *"
                        className="border border-gray-300 rounded-md p-4 bg-[#F8F8F8] text-black text-lg h-40 resize-none focus:outline-none"
                    ></textarea>
                    </div>

                    {/* Button */}
                    <button className="mt-10 bg-[#826A45] text-white px-10 py-4 text-xl font-semibold rounded-md w-fit hover:bg-[#9b7b4d] transition-all flex items-center gap-3">
                    Get In Touch
                    </button>
                </div>

            </div>

            {/* 4th card, map */}
            <div className="w-full h-[80vh] mt-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084506780357!2d-122.41941568468117!3d37.7749297797587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0e5ef3%3A0xf0f35f1b6b0f3f8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699384750831!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                className="rounded-2xl border-0"
            ></iframe>
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

            {/* Footer // 9th Crad */}
            <Footer/>

        </div>
    );
}