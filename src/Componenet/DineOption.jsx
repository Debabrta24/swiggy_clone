import React from "react";
import DineOptiondata from "../Utils/DineData";
import DineCart from "./DineCart";

const DineOption = () => {
  return (
    <>
      <div className="w-[80%] mt-20 ">
        <p>Discover Best resturent on DineOut</p>
      </div>
      <div className="flex fles-wrap overflow-auto">
        {DineOptiondata.map((data) => {
          return <DineCart key={data.info.id} data={data}></DineCart>;
        })}
      </div>
    </>
  );
};

// 28
export default DineOption;
