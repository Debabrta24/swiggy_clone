import React, { useEffect, useState } from "react";
import Restcard from "./Restcard";
import Simmer from "./Simmer";

const Resturent = () => {
  const [restData, setresData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setresData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );
    }

    fetchData();
  }, []);
  // console.log(restData);
  if(restData.length==0){
    return (<Simmer></Simmer>)
  }
  return (
    <>
      <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
        {restData.map((restInfo) => (
          <Restcard key={restInfo?.info?.id} restInfo={restInfo}></Restcard>
        ))}
      </div>
    </>
  );
};

export default Resturent;
