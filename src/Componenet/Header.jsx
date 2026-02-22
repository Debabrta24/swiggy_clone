import React from "react";

const Header = () => {
  return (
    <header className="bg-[#FF5200] font-serif ">
      <div className="flex justify-between container px-4 py-8 mx-auto ">
        <img className="w-40 h-12 " src="../src/public/image_logo.png" alt="" />
        <div className=" text-white text-base font-bold gap-4 flex items-center  ">
          <a   target="_blank" href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
          <a   target="_blank" href="https://partner.swiggy.com/food/#!/login">Partnar with us</a>
          <a  className=" border rounded-xl  border-white py-3 px-4 "  href="">Get the apps</a>
          <a  className=" border rounded-xl bg-black py-3 px-4  "  href="">Sig in</a>
        </div>
      </div>
    <div className="pt-16  pb-16 relative">
      <img className="h-110 w-60 absolute top-0 left-0  "  src="../src/public/image_1.png" alt="" />
      <img className="h-110 w-60 absolute top-0 right-0 "  src="../src/public/image_2.png" alt="" />
        <div className="text-5xl text-white font-bold max-w-[60%] text-center container mx-auto">
          Order food & groceries. Discover best restaurants. Swiggy it!</div>
        <div className="max-w-[70%] container mt-5 mx-auto flex gap-7 ">
          <input className=" rounded-xl bg-white w-[40%] text-base px-6 py-4 " type="text" placeholder="Delhi,India" />
          <input  className=" rounded-xl bg-white w-[55%] px-6 py-4 " type="text" placeholder="Search for resturent and iteams for more" />
        </div>
      </div>
      <div className="max-w-[80%] container mx-auto flex ">
        <a href="">
          <img src="../src/public/FoodDelivery.png" alt="" />
        </a>
        <a href="">
          <img src="../src/public/instamart.png" alt="" />
        </a>
        <a href="">
          <img src="../src/public/Dinout.png" alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
