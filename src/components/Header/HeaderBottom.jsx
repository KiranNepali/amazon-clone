import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { SideNavContent } from "./SideNavContent";
import { motion } from "framer-motion";

export const HeaderBottom = () => {
  const ref = useRef();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sideBar]);
  return (
    <div className="w-full px-4 h-[36px] flex items-center bg-amazon_light text-white">
      {/* list item  */}
      <ul className="flex items-center text-sm tracking-wide">
        <li
          onClick={() => setSideBar(true)}
          className="headerHover flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover">Today's deal</li>
        <li className="headerHover">Customer service</li>
        <li className="headerHover">Gift Cards</li>
        <li className="headerHover">Registry</li>
        <li className="headerHover">Sells</li>
      </ul>
      {/* list item ends */}

      {/* side nav  */}
      {sideBar && (
        <div className=" w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[350px] h-full bg-white border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, sign in
                </h3>
              </div>

              {/* side nav  */}
              <div>
                <SideNavContent
                  title="Digital Content & Devices"
                  one="Amazon music"
                  two="Kindle Books"
                  three="Amazon Appstore"
                />
                <SideNavContent
                  title="Shop By Department"
                  one="Electronics"
                  two="Computers"
                  three="Smart Home"
                />
                <SideNavContent
                  title="Programs & Features"
                  one="Gift Cards"
                  two="Amazon Live"
                  three="International Shopping"
                />
                <SideNavContent
                  title="Help & Settings"
                  one="Your Account"
                  two="Customer Services"
                  three="Contact us"
                />
              </div>
              {/* side nav ends  */}

              <span
                onClick={() => setSideBar(false)}
                className="absolute top-0 left-[360px] w-10 h-10 bg-white text-black hover:text-white flex items-center justify-center border border-gray-200 hover:bg-red-500 cursor-pointer duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};
