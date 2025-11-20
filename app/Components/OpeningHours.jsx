import React from "react";

export default function OpeningHours() {
  return (
    <div className="w-full h-fit flex flex-col p-5 md:p-30">
      <h1 className="text-5xl md:text-9xl font-bold font-serif text-black/5 dark:text-[#242424]">
        RESTAN
      </h1>
      <div className="w-full h-full flex flex-col md:flex-row relative">
        
        {/* Video Section */}
        <div className="w-full md:w-[60%] h-60 md:h-115 bg-black">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=6_fT18P4b8Ikbrsy&amp;controls=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full object-cover"
            ></iframe>
        </div>

        <div className="bg-white dark:bg-[#262525] shadow-2xl w-full md:w-[50%] h-fit relative md:absolute md:bottom-30 md:right-0 z-10 p-10 md:p-20">
          <h1 className="text-3xl font-bold">Opening Hours</h1>
          <h1 className="mt-5 text-[#6D6D6D]">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
            The Patio Time Bar opens in the center..
          </h1>
          <h1 className="font-bold mt-10">Sunday to Tuesday: 10:00 - 09:00</h1>
          <h1 className="font-bold mt-5">
            Wednesday to Thursday: 11:30 - 10:30
          </h1>
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
  );
}