import React from "react";

const DineCart = ({data}) => {
  // console.log(data?.info)
  return (
    <>
      <div className="max-w-sm  flex-none  ">
        <a href={data.cta.link}>
        <div className="relative"> 
        <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data?.info?.mediaFiles[0]?.url} alt="" />
        <p  className=" text-white absolute bottom-4 left-4 text-xl font-bold" >{data?.info?.name}</p>
        <p  className=" text-white absolute bottom-4 right-4 text-xl font-bold" >{data?.info?.rating?.value}</p>
      <div className="absolute bg-gradient-to-t from-black to-transparent h-8 bottom-0 left-0 right-0"></div>
      </div>
      </a>
   </div>
  </>
  );
};

export default DineCart;
