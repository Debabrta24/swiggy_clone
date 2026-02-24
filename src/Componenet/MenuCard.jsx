import React, { useState } from "react";
import RestInfo from "./RestInfo";

const MenuCard = ({ menuIteams }) => {
  const [isOpen, setIsOpen] = useState(true);
  // console.log(menuIteams)
  if (isOpen) {
    return (
      <>
        <div className="flex justify-between">
          <p className="text-3xl font-bold p-4">{menuIteams.title}</p>
          <button
            className="text-3xl "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "^" : "v"}
          </button>
        </div>
      </>
    );
  }
  if ("categories" in menuIteams) {
    return (
      <>
        <div className="w-full">
          <p className="text-3xl font-bold p-4">{menuIteams.title}</p>
        
          <div className="">
            {menuIteams?.categories?.map((items) => {
              <MenuCard key={items?.title} menuIteams={items}></MenuCard>;
            })}
          </div>
          
        <div className="h-5 bg-gray-600 ">Hello ji</div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full">
        <p className="font-bold text-2xl">{menuIteams.title}</p>
          <button
            className="text-3xl "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "^" : "v"}
          </button>
        <div className="">
          {menuIteams?.itemCards?.map((item) => (
            <RestInfo
              key={item?.card?.info?.id}
              restData={item?.card?.info}
            ></RestInfo>
          ))}
        </div>
      </div>

    </>
  );
};

export default MenuCard;
