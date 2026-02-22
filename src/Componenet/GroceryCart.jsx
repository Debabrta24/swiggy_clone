import React from "react";

const GroceryCart = ({ product }) => {
  return (
    <>
      <div className="flex-none  ">
        <a href={product?.action?.link}>
          <img
            className="h-40 w-50  object-cover "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              product?.imageId
            }
            alt=""
          />
        </a>
        <h2 className="font-bold text-center" >{product?.action?.text}</h2>
      </div>
    </>
  );
};

export default GroceryCart;
