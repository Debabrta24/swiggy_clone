import React from "react";

const DineCart = ({data}) => {
  // console.log(data?.info.mediaFiles)
  return (
    <>
      <div className="max-w-sm ">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data?.info?.mediaFiles?.url} alt="" />
        <p>{data?.info?.name}</p>
          <p>{data?.info?.ratting?.value}</p>
      </div>
    </>
  );
};

export default DineCart;
