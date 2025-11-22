"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navColor, setNavColor] = useState(false);
  const [menuOpen, setMenu] = useState(false);

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

  return (
    <>
      {/* Above Nav Card */}
      {!navColor && (
        <div className="hidden md:flex w-full h-10 fixed border-b border-white/50 items-center px-20 justify-between bg-[#826A45] text-white text-xl z-50">
          <div className="flex flex-row w-[30%] justify-around gap-5">
            <h1>Phone:+91XXXXXXXXXX</h1>
            <h1>Email:food@restan.com</h1>
          </div>
          <div>
            <h1>175 10h Street, Office 375 Berlin, De 21562</h1>
          </div>
        </div>
      )}

      {/* Nav Card */}
      <div
        className={`w-full h-auto flex flex-row justify-between md:justify-around items-center p-5 md:p-7 z-40 fixed ${navColor ? "bg-[#FFFFFF] dark:bg-black/60 dark:backdrop-blur-md dark:text-white top-0 left-0 mt-0 text-black" : "bg-transparent mt-0 md:mt-10 text-white"} border-b-2 border-[#1E1E1E]`}>

        {/* left Nav Card */}
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
          className={`w-auto h-12 md:h-20 ${navColor ? "invert dark:invert-0" : ""}`}
        />

        {/* Hamburg Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenu(!menuOpen)}>
            <img
            src="https://cdn-icons-png.flaticon.com/128/8727/8727897.png"
            className="w-auto h-10"
            ></img>
          </button>
        </div>

        {/* mid Nav Card */}
        <div className="w-auto h-auto hidden md:flex flex-row text-xl font-bold gap-10 justify-evenly items-center">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/contactus">Contact Us</Link>
        </div>

        {/* Right Nav Card */}
        <div className="w-auto h-auto hidden md:flex flex-row text-xl font-bold gap-5 justify-evenly items-center">
          <button
            className={`bg-[#FCFCFC] w-15 h-15 flex justify-center items-center rounded-full ${
              navColor ? "bg-black" : ""
            }`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
              className={`w-8 ${navColor ? "invert" : ""}`}
            />
          </button>
          <button
            className={`border-white border-2 py-5 px-15 ${
              navColor ? "bg-[#826A45] text-white rounded-full" : ""
            }`}
          >
            Reservation
          </button>
        </div>
      </div>

      {/* Menu \\ Below Nav Card */}
      <div className="fixed w-full px-10 z-20">
        {menuOpen && (
          <div className="w-full h-fit flex flex-col mt-35 text-2xl space-y-2 font-bold items-center z-50 bg-black/60 backdrop-blur-md rounded-2xl py-5 text-white">
                    <Link href="/">Home</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/aboutus">About Us</Link>
                    <Link href="/contactus">Contact Us</Link>
        </div>)}
      </div>
    </>
  );
}