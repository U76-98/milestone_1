"use client";

import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OpeningHours from "../Components/OpeningHours";

export default function ContactUs() {

    const fstcard = "https://restan-nextjs.vercel.app/assets/img/shape/5.jpg";
    const restan = "https://img.youtube.com/vi/F3zw1Gvn4Mk/maxresdefault.jpg";

    return (
        <div className="w-full h-full text-black dark:text-white bg-[#FEFEFE] dark:bg-[#1B1B1B] overflow-x-hidden">
            
            {/* Navbar Component */}
            <Navbar />

            {/* First Crad */}
            <div className="w-full h-[50vh] md:h-[80vh] text-white bg-cover bg-center" style={{backgroundImage: `url(${fstcard})`}}>
                <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-san mt-20 md:mt-40">Contact Us</h1>
                    <h1 className="font-san text-xl mt-5">Home &gt; contact us</h1>
                </div>
            </div>

            {/* 2nd card, info card */}
            <div className="w-full h-fit md:h-[50vh] flex flex-col md:flex-row justify-center items-center px-5 md:px-40 gap-10 mt-20">

            {/* Hotline Card */}
            <div className="w-full md:w-[30%] h-60 md:h-[60%] border border-gray-200 rounded-2xl flex flex-col justify-center items-center shadow-md">
                <img
                src="https://cdn-icons-png.flaticon.com/128/597/597177.png"
                alt="phone"
                className="w-16 h-16 mb-5"
                />
                <h1 className="text-2xl font-bold mb-2">Hotline</h1>
                <p className="text-lg dark:text-white/50">+4733378901</p>
            </div>

            {/* Location Card */}
            <div className="w-full md:w-[30%] h-60 md:h-[60%] border border-gray-200 rounded-2xl flex flex-col justify-center items-center shadow-md">
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
            <div className="w-full md:w-[30%] h-60 md:h-[60%] border border-gray-200 rounded-2xl flex flex-col justify-center items-center shadow-md">
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
            <div className="w-full h-fit md:h-[90vh] flex flex-col justify-center items-center px-5 md:px-40 mt-10 md:mt-0">
            
                <div className="w-full md:w-[70%] bg-white dark:bg-[#262525] shadow-2xl rounded-2xl p-5 md:p-20 flex flex-col justify-center">
                    {/* Title */}
                    <div className="text-center mb-10">
                    <h1 className="text-[#826A45] font-serif text-lg tracking-widest">
                        ─── KEEP IN TOUCH ───
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold mt-3">Send us a Message</h1>
                    </div>

                    {/* Input Fields */}
                    <div className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 rounded-md p-4 bg-[#F8F8F8] text-black text-lg focus:outline-none"
                    />

                    <div className="flex flex-col md:flex-row gap-5">
                        <input
                        type="email"
                        placeholder="Email*"
                        className="w-full md:w-1/2 border border-gray-300 rounded-md p-4 bg-[#F8F8F8] text-black text-lg focus:outline-none"
                        />
                        <input
                        type="text"
                        placeholder="Phone"
                        className="w-full md:w-1/2 border border-gray-300 rounded-md p-4 bg-[#F8F8F8] text-black text-lg focus:outline-none"
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
            <div className="w-full h-[50vh] md:h-[80vh] mt-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084506780357!2d-122.41941568468117!3d37.7749297797587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0e5ef3%3A0xf0f35f1b6b0f3f8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699384750831!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                className="rounded-none md:rounded-2xl border-0"
            ></iframe>
            </div>

            {/* Restan card // 5th Crad */}
            <OpeningHours/>

            {/* Footer // 9th Crad */}
            <Footer/>

        </div>
    );
}