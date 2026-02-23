import React from "react";
import Home from "./Componenet/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Resturent from "./Componenet/Resturent";
import { Links } from "react-router";
import ResturentMenu from "./Componenet/ResturentMenu"
const App = () => {
  return (
    <>
      {/* <Home></Home> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Resturent" element={<Resturent></Resturent>}></Route>
          <Route path="/city/delhi/:id" element={<ResturentMenu></ResturentMenu>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
