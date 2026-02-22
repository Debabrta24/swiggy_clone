import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-[#FF5200]">
        <div className="flex justify-between   ">
          <div className="">
            <img className="h-15 w-30" src="../src/public/image.png" alt="" />
          </div>
          <div className="flex gap-10 items-center mr-10">
            <a target="_blank" href="https://www.swiggy.com/corporate/">
              Swiggy Corporate
            </a>

            <a target="_blank" href="https://partner.swiggy.com/food/login">
              Partner With Us
            </a>

            <a
              target="_blank"
              className="border border-white text-white font-bold  rounded-2xl inline-flex items-center justify-center  h-8 w-26.5  "
              href="#"
            >
              Get the App
            </a>

            <a
              target="_blank"
              className="bg-black text-white font-bold  rounded-full inline-flex items-center justify-center h-8 w-26.5  "
              href="#"
            >
              Sign in
            </a>
          </div>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
