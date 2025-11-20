"use client";
import React from "react";

export default function MenuCard({ imageUrl, rating, name, description, price }) {
  return (
    <div className="w-full md:w-[32%] rounded-xl relative mb-10 md:mb-0">
      <img
        src={imageUrl}
        className="w-full rounded-t-xl object-cover"
      ></img>
      <div className="h-fit pb-8 bg-white dark:bg-[#1B1B1B] border border-t-0 border-black/20 dark:border-white/20 rounded-b-3xl z-10 relative">
        
        <div className="w-[60%] h-20 bg-white dark:bg-[#1B1B1B] rounded-r-xl absolute top-0 left-0 z-10 flex flex-row justify-between items-center p-4 md:p-8 shadow-md md:shadow-none transform -translate-y-1/2">
          <div className="flex flex-row justify-center items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              className="w-5 h-5 md:w-7 md:h-7"
            ></img>
            <h1 className="font-bold text-[#666666]">
              {rating}
            </h1>
          </div>
          <h1 className="font-bold text-[#826A45] text-xl md:text-2xl">
            {price}
          </h1>
        </div>

        <div className="pt-16 px-8 flex flex-col">
            <h1 className="text-2xl font-bold font-serif">{name}</h1>
            <h1 className="pt-3 font-serif text-[#666666] dark:text-[#C6C9CC]">{description}</h1>
            <button className="rounded-full border border-[#826A45] w-full mt-6 p-3 font-bold dark:bg-[#826A45] hover:bg-[#826A45] hover:text-white transition-colors">
            Add to Cart
            </button>
        </div>

      </div>
    </div>
  );
}