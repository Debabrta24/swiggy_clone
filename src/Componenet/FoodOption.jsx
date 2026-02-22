import React from "react";
import { imageGridCards } from "../Utils/FoodData";
import FoodCArt from "../Componenet/FoodCArt"
const FoodOption = () => {
  
    //   console.log(FoodCArt)
    return (
    <>
      <div className="w-[80%] container mx-auto flex flex-wrap mt-10 gap-3 ">
        {
            imageGridCards.map((foodData)=>{ return  <FoodCArt  key={foodData.id} foodData={foodData}
          
            ></FoodCArt>})
        }

      </div>
    </>
  );
};

export default FoodOption;
