export default function Chef()
{
    return(
        <div className="w-full h-fit bg-[#EBE9E6] dark:bg-[#262525] flex flex-col items-center px-5 md:px-50 py-20">
            <p className="text-xl text-[#826A45] font-bold font-serif">MASTER CHEFS</p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mt-3 text-center">Meet Our Special Chefs</h1>

            <div className="w-fit h-full flex flex-col md:flex-row gap-20 md:gap-40 mt-10 mb-10">

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
    );
}