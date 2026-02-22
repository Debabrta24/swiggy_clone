import React from "react";

const DineCart = ({data}) => {
  // console.log(data?.info.mediaFiles)
  return (
    <>
      <div className="max-w-sm   absolute">
        <div className="relative"> 
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data?.info?.mediaFiles[0]?.url} alt="" />
        <p  className=" absolute bottom-4 left-4 text-xl font-bold" >{data?.info?.name}</p>
        <p  className=" absolute bottom-4 right-4 text-xl font-bold" >{data?.info?.ratting?.value}</p>
      </div>
   </div>
  </>
  );
};

export default DineCart;
