import React, { useState } from "react";
import { logo } from "../../assets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { allItems } from "../../constants";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HeaderBottom } from "./HeaderBottom";

export const Header = () => {
  const [showAll, setShowAll] = useState(false);
  // console.log(showAll);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* logo */}
        <div className="headerHover ">
          <img className="w-24 mt-2 " src={logo} alt="logo" />
        </div>
        {/* logo ends  */}

        {/* deliver */}
        <div className="headerHover ">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-lightFont flex flex-col">
            Deliver to{" "}
            <span className="text-sm text-whiteText -mt-1 font-semibold">
              Nepal
            </span>
          </p>
        </div>
        {/* deliver ends  */}

        {/* search  */}
        <div className="h-10 rounded-md flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 font-titleFont duration-300 text-amazon_blue cursor-pointer rounded-bl-md rounded-tl-md"
          >
            All
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-x-hidden overflow-y-scroll bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col z-50 ">
                {/* <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200 hover:border-b-2">
                  All departments
                </li> */}
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200 hover:border-b-2"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* search ends  */}

        {/* signin */}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-lightText font-light text-xs">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            Accounts & Lists
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
        {/* signin ends */}

        {/* order  */}
        <div className="flex flex-col flex-center justify-center headerHover items-start">
          <p className="text-lightText font-light text-xs">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* order ends */}

        {/* cart  */}
        <div className="flex flex-center justify-center headerHover items-start relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart{" "}
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>
        {/* cart ends  */}
      </div>
      <HeaderBottom />
    </div>
  );
};
