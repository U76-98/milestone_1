export default function Footer()
{
    return(
    <div className="w-full h-fit flex flex-col items-center text-white">
        <div className="w-full h-fit p-20 z-10">
          <div className="w-full h-full p-10 bg-[#1B1B1B] dark:bg-[#2E2D2D] flex flex-row gap-10">
            
            {/* About Us */}
            <div className="w-[24%] flex flex-col p-5 border-r-1 border-[#C1CCCC]">
              <h1 className="text-4xl font-bold">About Us</h1>
              <p className="mt-10 text-xl text-[#C1CCCC]">
                Continued at zealously necessary is Surrounded sir motionless she end literature.
                Gay direction neglected.
              </p>
            </div>
            
            {/* Explore */}
            <div className="w-[24%] h-full flex flex-col p-5">
              <h1 className="text-4xl font-bold">Explore</h1>
              <div className="flex flex-col mt-10 gap-5 text-xl text-[#C1CCCC]">
                <h2>Company Profile</h2>
                <h2>About</h2>
                <h2>Help Center</h2>
                <h2>Career</h2>
                <h2>Features</h2>
                <h2>Contact</h2>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-[24%] h-full flex flex-col p-5">
              <h1 className="text-4xl font-bold">Contact Info</h1>
              <div className="flex flex-col mt-10 gap-5 text-xl text-[#C1CCCC]">
                <h2>175 10th Street, Office 375<br />Berlin, De 21562</h2>
                <h2>+123 34598768<br />+554 34598734</h2>
                <h2>food@restan.com</h2>
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-[24%] h-full flex flex-col p-5">
              <h1 className="text-4xl font-bold">Newsletter</h1>
              <div className="flex flex-col mt-10 gap-5 text-xl text-[#C1CCCC]">
                <h2>
                  Join our subscribers list to get the latest news and special offers.
                </h2>
                <input
                  type="text"
                  className="border-white border-b bg-transparent outline-none py-2"
                  placeholder="Your Email"
                />
                <div className="flex flex-row items-center gap-2 mt-2">
                  <input type="checkbox" />
                  <h2>
                    I agree to the Privacy Policy
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Picture here >> */}
        <div className="bg-[#262525] w-full h-full p-20 -mt-50">
          <div className="flex flex-row justify-between mt-30 items-center">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
              className="w-30"
            />
            <h1>© Copyright 2025. Restan. All Rights Reserved</h1>
          </div>
        </div>
    </div>
    );
}