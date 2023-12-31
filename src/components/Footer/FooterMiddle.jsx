import React from "react";
import { FooterMiddleList } from "./FooterMiddleList";
import { middleList } from "../../constants";
import { npFlag } from "../../assets/index";
import { logo } from "../../assets/index";

export const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      {/* Top  */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full flex flex-col pl-10 md:pl-0  md:grid md:grid-cols-3 lg:grid-cols-4 place-items-center items-start ">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* top ends  */}

      {/* bottom  */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
          <img className="w-5" src={npFlag} alt="flagImg" />
          <p>Nepal</p>
        </div>
      </div>
      {/* bottom ends  */}
    </div>
  );
};
