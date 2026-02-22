import React from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <>
      <header className="bg-[#FF5200]">
        <div className="flex justify-between mt-10   ">
          <div className="">
            <img className="w-30" src="../src/public/image_logo.png" alt="" />
          </div>
          <div className="flex gap-10 items-center mr-10">
            <div className="">
              <a target="_blank" href="https://www.swiggy.com/corporate/">
                Swiggy Corporate
              </a>
            </div>
            <div className="">
              <a target="_blank" href="https://partner.swiggy.com/food/login">
                Partner With Us
              </a>
            </div>

            <div className="">
              <a
                target="_blank"
                className="border text-white font-bold  rounded-full inline-flex items-center justify-center h-8 w-26.5 "
                href="#"
              >
             
                Get the App
              </a>
            </div>
            <div className="">
              <a
                target="_blank"
                className="bg-black text-white font-bold  rounded-full inline-flex items-center justify-center h-8 w-26.5 "
                href="#"
              >
                {" "}
                Sign in{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between  ">
          <div className="">
            <img src="../src/public/image_1.png" alt="" />
          </div>
          <div className=" flex flex-wrap items-center justify-center">
            <div className="items-center text-center mt-20 ">
              <h2 className="text-6xl font-bold text-white  " >Order Fod Groceries. Discover Best resturent. Swiggy it !</h2>
            </div>


            <div className="flex gap-4 ">
              <div className="flex h-10 w-72 border-none  bg-white rounded-xl  items-center ">
              <div className="">
                  <CiLocationOn className="text-xl text-[#FF5200] p-4" />
                </div>
                <div className="">
                   <input className=" h-10 w-60 border-none outline-none"  type="text" placeholder="Delhi ,India" />
                </div>
                <div className="">
                  <IoIosArrowDown className="text-xl" />
                </div>
              </div>

               <div className="flex h-10 w-90 border-none  bg-white rounded-xl  items-center ">
                <div className="">
                   <input className=" h-10 w-80 border-none outline-none p-4"  type="text" placeholder="Search for restaurant, item or more" />
                </div>
                <div className="">
                  <CiSearch className="text-xl" />
                </div>
              </div>
         
         
          </div>

          </div>
          <div className="">
            <img src="../src/public/image_2.png" alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
