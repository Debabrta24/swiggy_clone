import React from "react";

const RestInfo = ({ restData }) => {
  // console.log( restData )

  return (
    <>
      <div className="flex justify-between w-full ">
        <div className="w-[70%]">
          <p>{restData?.defaultPrice?restData?.defaultPrice/100:restData.price/100}</p>
          <span className="text-green-700" >{restData?.ratings?.aggregatedRating?.rating}</span>
          <span  >{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
          <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId} alt="" />
          <button className="absolute bg-white bottom-1 left-20 text-green-600 px-4 py-2 rounded-xl " >ADD </button>
        </div>
      </div>
    </>
  );
};

export default RestInfo;
