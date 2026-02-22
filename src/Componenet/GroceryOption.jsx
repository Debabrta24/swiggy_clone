import React from "react";
import GrocerGridCard from "../Utils/Grocery";
import GroceryCart from "./GroceryCart";
const GroceryOption = () => {
  return (
    <>
      <div className="container w-[80%] mx-auto  mt-20  ">
        <h1>Shop Groceries on Instamart</h1>
        <div className=" container mx-auto flex  flex-wrap overflow-x-auto mt-5 gap-3">
          {GrocerGridCard.map((product) => {
            return (
              <GroceryCart key={product.id} product={product}></GroceryCart>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GroceryOption;
