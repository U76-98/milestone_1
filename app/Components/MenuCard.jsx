"use client";
import React from "react";

export default function MenuCard({ imageUrl, rating, name, description, price }) {
  return (
    <div className="w-[32%] rounded-xl relative">
      <img
        src={imageUrl}
        className="w-full rounded-t-xl"
      ></img>
      <div className="h-50 bg-white dark:bg-[#1B1B1B] border border-t-0 border-black/20 dark:border-white/20 rounded-b-3xl z-10">
        {/* Special White Zone */}
        <div className="w-[60%] h-20 bg-white dark:bg-[#1B1B1B] rounded-r-xl -mt-15 z-10 absolute flex flex-row justify-between items-center p-8">
          <div className="flex flex-row justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              className="w-7 h-7"
            ></img>
            <h1 className="font-bold text-[#666666]">
              {rating}
            </h1>
          </div>
          <h1 className="font-bold text-[#826A45] text-2xl">
            {price}
          </h1>
        </div>

        <h1 className="pt-6 text-2xl ml-10 font-bold font-serif">{name}</h1>
        <h1 className="pt-3 ml-10 font-serif">{description}</h1>
        <button className="rounded-full border border-[#826A45] w-[87%] ml-10 mt-6 p-3 font-bold dark:bg-[#826A45]">
          Add to Cart
        </button>

      </div>
    </div>
  );
}
