"use client";

import React, { useEffect, useState } from "react";
import MenuCard from "./Components/MenuCard";
import Footer from "./Components/Footer";
import Chef from "./Components/Chef";
import OpeningHours from "./Components/OpeningHours";
import Link from "next/link";



export default function Home() {
  const mainImg ="https://restan-nextjs.vercel.app/assets/img/banner/14.jpg";
  {/* Popular Category card */}
  const pop1 = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg";
  const pop2 = "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg";
  const pop3 = "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg";

  {/* Special Offer card */}
  const offerCard = "https://restan-nextjs.vercel.app/assets/img/shape/4.jpg";

  {/*NAV BAR LOGIC */}
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
  {/*NAV BAR LOGIC END*/}

  return (
    <div className="w-full h-full bg-[#FFFFFF] text-black dark:bg-[#1B1B1B] dark:text-white">
      {/* Above Nav Card */}
      {!navColor &&
        <div className="w-full h-10 fixed border-b border-white/50 md:flex flex-row items-center px-20 justify-between text-white text-xl hidden">
          <div className="flex flex-row w-[30%] justify-around">
            <h1>Phone:+91XXXXXXXXXX</h1>
            <h1>Email:food@restan.com</h1>
          </div>
          <div>
            <h1>175 10h Street, Office 375 Berlin, De 21562</h1>
          </div>
        </div>
      }

      {/* Nav Card */}
      <div className={`w-screen h-auto flex flex-row justify-around items-center py-7 md:p-7 z-30 text-white fixed ${navColor ? "bg-[#383838] top-0 left-0 mt-0 " : "bg-transparent mt-10"}`}>
        {/* Left Nav Card */}
        <div className="w-1/5 h-auto md:flex flex-row text-xl font-bold gap-5 justify-evenly items-center hidden">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/aboutus">About Us</Link>
        </div>
        {/* Center Nav Card */}
        <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
        className="w-auto md:h-20 h-10"
        >
        </img>
        {/* Right Nav Card */}
        <div className="w-1/5 h-auto md:flex flex-row text-xl font-bold gap-5 justify-evenly items-center hidden">
          <Link href="/contactus">Contact Us</Link>
          <button>Shop</button>
          <button>Blog</button>
        </div>

        {/* Hamburg Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenu(!menuOpen)}>
            <img
            src="https://cdn-icons-png.flaticon.com/128/8727/8727897.png"
            className="w-auto h-10"
            ></img>
          </button>
        </div>
      </div>

        
      {menuOpen && (
        <div className="w-full h-fit flex flex-col mt-25 text-2xl space-y-2 font-bold items-center z-50 mt-3 fixed bg-[#383838] rounded-b-2xl py-5">
                  <Link href="/">Home</Link>
                  <Link href="/menu">Menu</Link>
                  <Link href="/aboutus">About Us</Link>
                  <Link href="/contactus">Contact Us</Link>
        </div>)}

      {/* Intro Card */}
      <div className="w-screen h-screen bg-cover bg-center text-white" style={{backgroundImage: `url(${mainImg})`}}>
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center pt-30">
          <h1 className="md:text-8xl text-4xl font-bold font-serif">
            Best Restaurant
          </h1>
          <div className="border-[#FFD8A3] border-2 w-40 h-40 rounded-full mt-7 flex justify-center items-center bg-[#FFD8A3]/40">
            <img
              src="https://cdn-icons-png.flaticon.com/128/14921/14921792.png"
              className="w-auto h-18"
            >
            </img>
          </div>
        </div>
      </div>

      {/* Book a table Card // 2nd Crad */}
      <div className="w-screen h-fit flex flex-col md:flex-row md:pl-30 px-5">
        {/* Book a table Card */}
        <div className="md:w-[35%] w-full h-fit shadow-xl rounded-4xl md:mt-[-50px] mt-[80px] z-10 bg-[#FFFFFF] dark:bg-[#262525] p-15">

          <img
          src="https://cdn-icons-png.flaticon.com/128/857/857681.png"
          className="w-auto h-20 -mt-27 bg-[#826A45] rounded-full p-1"
          ></img>

          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-3xl mt-8">Book a table</h1>
            <input placeholder="Phone" className="border-1 border-black/20 dark:border-white/50 p-4 rounded-xl"></input>
            <select className="border-1 border-black/20 dark:border-white/50 p-4 rounded-xl">
              <option value="1 Person">1 Person</option>
              <option value="2 Person">2 Person</option>
              <option value="3 Person">3 Person</option>
              <option value="4 Person">4 Person</option>
            </select>
            <input type="date" className="border-1 border-black/20 dark:border-white/50 p-4 rounded-xl" />
            <select className="border-1 border-black/20 dark:border-white/50 p-4 rounded-xl">
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
            </select>
            <button className="w-1/2 p-5 bg-[#826A45] text-white rounded-xl">Book A Table</button>
          </div>

        </div>
        {/* Popular Category Card */}
        <div className="md:w-[65%] md:flex md:p-25 p-10 pb-0 mt-10 md:mt-0">
          <div className="w-full h-full">
            <h1 className="font-serif text-5xl">Our Popular category</h1>
            <div className="flex flex-col md:flex-row h-full mt-8 justify-between space-y-5">

              <div className="md:w-[32%] h-70 bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${pop1})`}}>
                <div className="items-end flex p-5 rounded-xl bg-gradient-to-t from-black via-black/20 to-transparent h-full w-full">
                  <div>
                    <h1 className="font-bold text-[#E7C28A]">Main Dishes</h1>
                    <h1 className="font-bold text-xl text-white">Chicken Alfredo</h1>
                  </div>
                </div>
              </div>

              <div className="md:w-[32%] h-70 bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${pop2})`}}>
                <div className="items-end flex p-5 rounded-xl bg-gradient-to-t from-black via-black/20 to-transparent h-full w-full">
                  <div>
                    <h1 className="font-bold text-[#E7C28A]">Deserts</h1>
                    <h1 className="font-bold text-xl text-white">Cheesecake</h1>
                  </div>
                </div>
              </div>

              <div className="md:w-[32%] h-70 bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${pop3})`}}>
                <div className="items-end flex p-5 rounded-xl bg-gradient-to-t from-black via-black/20 to-transparent h-full w-full">
                  <div>
                    <h1 className="font-bold text-[#E7C28A]">Sea Food</h1>
                    <h1 className="font-bold text-xl text-white">Salmon Fry</h1>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* 3nd Crad */}
      <div className="w-screen h-fit md:p-25 p-10 md:pt-0 mt-10">
          <div className="w-full h-full flex flex-col md:flex-row rounded-4xl space-y-10">

            <div className="md:w-1/3 flex flex-col p-10 justify-center md:border-t md:border-0 border border-[#826A45] md:rounded-tr-4xl rounded-4xl">
              <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
              className="w-25 h-fit"
              ></img>
              <h1 className="font-bold text-3xl mt-10">
                Quality Foods
              </h1>
              <h2 className="mt-5 text-xl text-[#6B6B6B] dark:text-[#CCCCCC]">
                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
              </h2>
            </div>

            <div className="md:w-1/3 flex flex-col p-10 justify-center md:border-b md:border-0 border border-[#826A45] md:rounded-tr-4xl rounded-4xl">
              <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"
              className="w-25 h-fit"
              ></img>
              <h1 className="font-bold text-3xl mt-10">
                Fast Delivery
              </h1>
              <h2 className="mt-5 text-xl text-[#6B6B6B] dark:text-[#CCCCCC]">
                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
              </h2>
            </div>

            <div className="md:w-1/3 flex flex-col p-10 justify-center md:border-t md:border-0 border border-[#826A45] md:rounded-tr-4xl rounded-4xl">
              <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75"
              className="w-25 h-fit"
              ></img>
              <h1 className="font-bold text-3xl mt-10">
                Delicious Recipes
              </h1>
              <h2 className="mt-5 text-xl text-[#6B6B6B] dark:text-[#CCCCCC]">
                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
              </h2>
            </div>
          </div>
      </div>

      {/* Special Offer Card // 3nd Crad */}
      <div className="w-full h-fit md:px-28 p-5">
        <div className="w-full h-full rounded-3xl flex flex-col md:flex-row bg-cover bg-center items-center" style={{backgroundImage: `url(${offerCard})`}}>

          <div className="md:w-[45%] h-fit flex md:flex-row p-10 md:p-20 md:pr-0 items-center justify-center">
            <div className="w-[40%] h-fit md:flex flex-col justify-center gap-10 items-center hidden">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"
                className="w-full h-[50%]"
              ></img>
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
                className="w-full h-[50%]"
              ></img>
            </div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
              className="md:w-[60%] h-fit"
            ></img>
          </div>

          <div className="md:w-[55%] h-fit flex flex-col items-center md:items-start md:p-20 p-5 pt-0 text-black">
            <h1 className="text-xl font-sans font-bold">
              TODAY SPECIAL OFFER
            </h1>
            <h1 className="font-sans text-3xl text-center md:text-start md:text-6xl font-bold mt-5">
              Explore Irresistible Promotions!
            </h1>
            <p className="mt-5 text-ml ">Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.
            </p>
            <button className="w-fit h-fit px-10 py-6 bg-[#826A45] text-ml font-bold rounded-full mt-5 text-white">
              Order Today
            </button>
          </div>
        </div>
      </div>

      {/* Menu Card // 4th Crad */}
      <div className="w-full flex flex-col items-center p-5 md:p-10 mt-10 md:mt-20">
        <p className="text-xl text-[#826A45] font-bold font-serif">FOOD MENU</p>
        <h1 className="text-3xl md:text-5xl font-serif font-bold mt-3 text-center md:text-left">Our Specials Menu</h1>

        {/* First Row */}
        <div className="flex flex-col md:flex-row w-full h-fit p-0 md:p-15 justify-between gap-10 md:gap-0 items-center">
          
          <MenuCard
            imageUrl="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F7.jpg&w=1920&q=75"
            rating="4.9(5.7K)"
            name="Vanilla Cupcakes"
            description="4 chicken legs | Chili sauce | Soft Drinks"
            price="$34"
          />

          <MenuCard
            imageUrl="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F8.jpg&w=1920&q=75"
            rating="4.2(3.1K)"
            name="Chocolate brownie"
            description="4 chicken legs | Chili sauce | Soft Drinks"
            price="$18"
          />

          <MenuCard
            imageUrl="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F9.jpg&w=1920&q=75"
            rating="4.8(6.7K)"
            name="Croissants Sweet Muffin"
            description="4 chicken legs | Chili sauce | Soft Drinks"
            price="$12"
          />

        </div>
        {/* second Row */}
        <div className="flex flex-col md:flex-row w-full h-fit p-0 md:p-15 md:pt-0 justify-between gap-10 md:gap-0 items-center">
          
          <MenuCard
            imageUrl="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F10.jpg&w=1920&q=75"
            rating="5(3.5K)"
            name="White Chocolate Cheesecake"
            description="4 chicken legs | Chili sauce | Soft Drinks"
            price="$22"
          />

          <MenuCard
            imageUrl="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F11.jpg&w=1920&q=75"
            rating="4.6(5.7K)"
            name="Lemon Meringue Pie"
            description="4 chicken legs | Chili sauce | Soft Drinks"
            price="$34"
          />

          <MenuCard
            imageUrl="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F12.jpg&w=1920&q=75"
            rating="4.8(5.5K)"
            name="Mixed Berry Mousse"
            description="4 chicken legs | Chili sauce | Soft Drinks"
            price="$36"
          />

        </div>

      </div>

      {/* 5th Crad */}
      <div className="w-full h-fit px-5 md:px-30 text-white">
        <div className="w-full h-full rounded-3xl flex flex-col md:flex-row bg-cover bg-center items-center bg-[#262525]">
          <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
          className="w-full md:w-[50%] h-fit p-5 md:p-20"
          ></img>
          <div className="w-full md:w-[50%] h-fit flex flex-col p-5 md:p-10">
            <h1 className="font-serif text-3xl md:text-5xl font-bold">
              Are you Ready to Start your online Order?
            </h1>
            <p className="mt-10 text-[#CCCCCC]">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
            </p>
            <div className="space-x-4 flex flex-row">
              <button className="w-fit h-fit px-6 md:px-10 py-4 bg-white text-black font-bold rounded-full mt-5">
                App Store
              </button>
              <button className="w-fit h-fit px-6 md:px-10 py-4 bg-[#826A45] font-bold rounded-full mt-5">
                Play Store
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Restan card // 6th Crad */}
      <OpeningHours/>
      
      {/* Chef Page // 7th Card */}
      <Chef/>

      {/* News Page // 8th Card */}
      <div className="w-full h-fit flex flex-col items-center p-5 md:p-30">
        <p className="text-xl text-[#826A45] font-bold font-serif">NEWS & BLOG</p>
        <h1 className="text-3xl font-serif font-bold mt-3 text-center">Our Latest News & Blog</h1>

        <div className="w-full flex flex-col md:flex-row mt-15 justify-between gap-10 md:gap-0">
          
          {/* First Blog Card */}
          <div className="w-full md:w-[48%] h-fit flex flex-col items-center relative">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
              className="w-full"
            />
            <div className="w-[90%] bg-white dark:bg-[#262525] shadow-2xl p-10 md:p-20 h-fit -mt-10 relative">
              {/* Date box fixed position */}
              <div className="absolute -top-10 right-10 w-20 h-20 bg-[#826A45] flex flex-col justify-center items-center text-white z-10">
                <h1 className="text-3xl font-bold leading-none">24</h1>
                <h1 className="text-sm">DEC</h1>
              </div>
              <h1 className="text-[#555] uppercase text-sm tracking-wide mb-3">By Md Sohag • Burger ,Food</h1>
              <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
                Picked up a Brussels burger Sprouts with ham
              </h1>
              <p className="text-ml text-[#826A45] font-bold mt-5 cursor-pointer">READ MORE</p>
            </div>
          </div>

          {/* Second Blog Card */}
          <div className="w-full md:w-[48%] h-fit flex flex-col items-center relative">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
              className="w-full"
            />
            <div className="w-[90%] bg-white dark:bg-[#262525] shadow-2xl p-10 md:p-20 h-fit -mt-10 relative">
              <div className="absolute -top-10 right-10 w-20 h-20 bg-[#826A45] flex flex-col justify-center items-center text-white z-10">
                <h1 className="text-3xl font-bold leading-none">24</h1>
                <h1 className="text-sm">DEC</h1>
              </div>
              <h1 className="text-[#555] uppercase text-sm tracking-wide mb-3">By Md Sohag • Burger ,Food</h1>
              <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
                This prefabricated passive house is highly sustainable
              </h1>
              <p className="text-ml text-[#826A45] font-bold mt-5 cursor-pointer">READ MORE</p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer // 9th Card */}
      <Footer />

    </div>
  );
}