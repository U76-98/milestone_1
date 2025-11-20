"use client";

import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Menu() {
  const fstcard = "https://restan-nextjs.vercel.app/assets/img/shape/5.jpg";
  const seccard = "https://restan-nextjs.vercel.app/assets/img/banner/10.jpg";
  const trdcard = "https://restan-nextjs.vercel.app/assets/img/banner/11.jpg";
  const fthcard = "https://restan-nextjs.vercel.app/assets/img/banner/9.jpg";
  const sthcard = "https://restan-nextjs.vercel.app/assets/img/banner/2.jpg";

  return (
    <div className="w-full h-full bg-[white] dark:bg-[#1B1B1B] text-black dark:text-white overflow-x-hidden">
      <Navbar />

      {/* First Crad */}
      <div
        className="w-full h-[50vh] md:h-[75vh] text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${fstcard})` }}
      >
        <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-san mt-20 md:mt-40">
            Food Menu
          </h1>
          <h1 className="font-san text-xl mt-5">Home &gt; Food Menu</h1>
        </div>
      </div>

      {/* 2nd Card */}
      <div className="w-full h-fit md:h-[90vh] flex flex-col md:flex-row px-5 md:px-40 mt-10 md:mt-40 justify-between gap-10 md:gap-0">
        {/* Left side image */}
        <div
          className="w-full md:w-[45%] h-60 md:h-full bg-center bg-cover relative rounded-xl"
          style={{ backgroundImage: `url(${seccard})` }}
        >
          {/* Hexagon menu label */}
          <div className="absolute top-[50%] md:top-[150px] right-0 md:right-[-110px] transform -translate-y-1/2 bg-[#7b603c] text-center text-white w-40 h-40 md:w-56 md:h-56 flex flex-col justify-center items-center clip-hexagon shadow-lg scale-75 md:scale-100">
            <h1 className="text-[#FF9E07] text-2xl md:text-4xl font-bold">
              Menu
            </h1>
            <h1 className="text-xl md:text-2xl font-serif mt-1">Breakfast</h1>
          </div>
        </div>

        {/* Right side menu items */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center gap-5 md:gap-10">
          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            />
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold">Chicken Alfredo</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold ">$40</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>

          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            />
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold ">Fish Chips</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold ">$70</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>

          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            />
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold te">
                Ebony Fillet Steak
              </h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold ">$85</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>

          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            ></img>
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold ">Chicken Grill</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold ">$40</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Card */}
      <div className="w-full h-fit md:h-[90vh] flex flex-col-reverse md:flex-row px-5 md:px-40 mt-20 md:mt-40 justify-between gap-10 md:gap-0">
        {/* Left side menu items */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center gap-5 md:gap-10">
          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            />
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold ">Brownies</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold k">$65</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>

          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            />
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold ">Cupcakes</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold ">$70</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>

          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            />
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold ">Cheesecakes</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold ">$100</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>

          <div className="w-full h-fit flex flex-row items-center justify-between">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=640&q=75"
              className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
            />
            <div className="space-y-2 ml-6 w-[60%]">
              <h1 className="text-xl md:text-3xl font-bold ">Muffins</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Ricotta / goat cheese / beetroot
              </p>
            </div>
            <div className="space-y-2 ml-6 w-[20%]">
              <h1 className="text-xl md:text-3xl font-bold ">$120</h1>
              <p className="text-[#666666] dark:text-[#C6C9CC] text-sm md:text-base">
                Free Drinks
              </p>
            </div>
          </div>
        </div>

        {/* Right side image with hexagon */}
        <div
          className="w-full md:w-[45%] h-60 md:h-full bg-center bg-cover relative rounded-xl"
          style={{ backgroundImage: `url(${trdcard})` }}
        >
          <div className="absolute top-[50%] md:top-[200px] left-0 md:left-[-110px] transform -translate-y-1/2 bg-[#7b603c] text-center text-white w-40 h-40 md:w-56 md:h-56 flex flex-col justify-center items-center clip-hexagon shadow-lg scale-75 md:scale-100">
            <h1 className="text-[#FF9E07] text-2xl md:text-4xl font-bold">
              Menu
            </h1>
            <h1 className="text-xl md:text-2xl font-serif mt-1">Lunch</h1>
          </div>
        </div>
      </div>

      {/* 4nd Crad */}
      <div
        style={{ backgroundImage: `url(${fthcard})` }}
        className="w-full h-fit md:h-[90vh] mt-20 md:mt-30 bg-cover bg-center"
      >
        <div className="bg-black/50 w-full h-full flex flex-col md:flex-row items-center justify-between p-5 md:p-30">
          <div className="w-full md:w-[40%] text-white pt-10 md:pt-0">
            <h1 className="text-4xl md:text-8xl font-serif">30 MINUTES</h1>
            <h1 className="text-4xl md:text-8xl font-serif">DELIVERY!</h1>
            <p className="text-[#CCC9C6] text-lg md:text-xl mt-5 md:mt-10">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time Bar opens in the center of Florence. The
              only bar inspired by the 1960s, it will give you a experience that
              you’ll have a hard time forgetting.
            </p>
            <button className="bg-[#826A45] w-60 h-20 mt-10 flex items-center justify-center rounded-xl md:rounded-none">
              <div className="flex flex-row items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
                  className="invert w-10 mr-3"
                ></img>
                <h1 className="font-bold text-xl">Order Now</h1>
              </div>
            </button>
          </div>
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"
            className="mt-10 md:mt-70 w-60 md:w-150"
          ></img>
        </div>
      </div>

      {/* 5nd Crad */}
      <div className="flex flex-col md:flex-row p-5 md:p-20 mt-10 md:mt-30 gap-10 md:gap-0">
        <div className="flex flex-col w-full md:w-1/2 items-center">
          <p className="text-xl text-[#826A45] font-bold font-serif">
            FRESH FROM OUR OCEAN
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3">
            Sea Food
          </h1>

          <div className="w-full md:w-[90%] h-full flex flex-col justify-center gap-5 md:gap-10 mt-10 md:mt-20">
            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F9.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold ">Salmon Fry</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold ">$80</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F10.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold ">
                  Pangasius or Basa
                </h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold ">$30</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F11.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold">Clams</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold ">$90</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F12.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold ">Red Crab</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold ">$40</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 items-center">
          <p className="text-xl text-[#826A45] font-bold font-serif">
            DRINKS & WINES
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-3">
            Beverage
          </h1>

          <div className="w-full md:w-[90%] h-full flex flex-col justify-center gap-5 md:gap-10 mt-10 md:mt-20">
            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F13.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold ">Wine</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold">$65</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F14.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold ">Coffee</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold ">$90</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F15.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold">Hot chocolate</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold ">$85</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-row items-center justify-between">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F16.jpg&w=640&q=75"
                className="rounded-full w-16 h-16 md:w-[15%] md:h-auto object-cover"
              ></img>

              <div className="space-y-2 ml-6 w-[60%]">
                <h1 className="text-xl md:text-3xl font-bold ">Milk Shake</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Ricotta / goat cheese / beetroot
                </p>
              </div>

              <div className="space-y-2 ml-6 w-[20%]">
                <h1 className="text-xl md:text-3xl font-bold ">$40</h1>
                <p className="text-[#667CB0] text-sm md:text-base">
                  Free Drinks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6th Crad */}
      <div className="w-full h-fit md:h-[90vh] bg-cover bg-center mb-10 md:mb-60"
        style={{ backgroundImage: `url(${sthcard})` }}
      >
        <div className=" flex flex-col md:flex-row w-full h-full bg-black/50 p-5 md:p-30 justify-between gap-10 md:gap-0">
          <div className="w-full md:w-[50%] flex flex-col justify-center space-y-5 md:space-y-8 text-white pt-10 md:pt-0">
            <h1 className="text-xl md:text-2xl font-bold">RESERVATION</h1>
            <h1 className="text-4xl md:text-7xl font-serif">
              Reservation Your Favorite Private Table
            </h1>
            <p className="text-lg md:text-xl">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time Bar opens in the center of Florence. The
              only bar inspired by the 1960s, it will give you a experience that
              you’ll have a hard time forgetting.
            </p>
            <div className="w-full flex flex-row">
              <div className="border-white border-r-1 pr-5 md:pr-10">
                <h1 className="text-xl md:text-3xl font-serif">Launch menu</h1>
                <h1 className="text-lg md:text-2xl font-serif">30+ Items</h1>
              </div>
              <div className="pl-5 md:pl-10">
                <h1 className="text-xl md:text-3xl font-serif">Dinner menu</h1>
                <h1 className="text-lg md:text-2xl font-serif">30+ Items</h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%] h-fit flex flex-col bg-[#1B1B1B] rounded-4xl border-1 border-white/50 p-5 md:p-20 text-white mb-10 md:mb-0">
            <div className="flex flex-col mb-6">
              <label className="text-xl md:text-2xl mb-2">Phone</label>
              <input
                type="text"
                placeholder="+4733378901"
                className="bg-transparent border border-gray-600 rounded-md p-3 md:p-5 text-white placeholder-gray-400"
              />
            </div>

            {/* Person */}
            <div className="flex flex-col mb-6">
              <label className="text-xl md:text-2xl mb-2">Person</label>
              <select className="bg-transparent border border-gray-600 rounded-md p-3 md:p-5 text-white">
                <option className="bg-[#1E1E1E]">1 Person</option>
                <option className="bg-[#1E1E1E]">2 Person</option>
                <option className="bg-[#1E1E1E]">3 Person</option>
                <option className="bg-[#1E1E1E]">4 Person</option>
              </select>
            </div>

            {/* Time */}
            <div className="flex flex-col mb-6">
              <label className="text-xl md:text-2xl mb-2">Date</label>
              <select className="bg-transparent border border-gray-600 rounded-md p-3 md:p-5 text-white">
                <option className="bg-[#1E1E1E]">10 Oct</option>
                <option className="bg-[#1E1E1E]">11 Sept</option>
                <option className="bg-[#1E1E1E]">12 Aug</option>
                <option className="bg-[#1E1E1E]">13 dec</option>
              </select>
            </div>

            {/* Time */}
            <div className="flex flex-col mb-10">
              <label className="text-xl md:text-2xl mb-2">Time</label>
              <select className="bg-transparent border border-gray-600 rounded-md p-3 md:p-5 text-white">
                <option className="bg-[#1E1E1E]">10:00 AM</option>
                <option className="bg-[#1E1E1E]">11:00 AM</option>
                <option className="bg-[#1E1E1E]">12:00 PM</option>
                <option className="bg-[#1E1E1E]">01:00 PM</option>
                <option className="bg-[#1E1E1E]">02:00 PM</option>
              </select>
            </div>

            {/* Button */}
            <button className="w-full md:w-fit bg-[#826A45] text-white py-3 md:py-5 rounded-md text-lg md:text-xl font-bold hover:bg-[#9b7b4d] transition-all px-5 md:px-10">
              Book A Table
            </button>
          </div>
        </div>
      </div>

      {/* Footer // 9th Crad */}
      <Footer />
    </div>
  );
}
