import React from "react";

const FoodCArt = ({ foodData }) => {
  // console.log(foodData)
  return (
    <>
      <a href={foodData?.action?.link}>
        <img
          className="h-40 w-50 "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
          alt=""
        />
      </a>
    </>
  );
};

export default FoodCArt;
