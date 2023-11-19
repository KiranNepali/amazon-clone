import React from "react";
import { Banner } from "../components/Home/Banner";
import { Products } from "../components/Home/Products";

export const Home = () => {
  return (
    <div>
      <Banner />
      <div className=" w-full -mt-36">
        <Products />
      </div>
    </div>
  );
};
