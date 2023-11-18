import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const SideNavContent = ({ title, one, two, three }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="mb-1 px-6 font-titleFont text-lg font-semibold">
        Digital Content & Devices
      </h3>
      <ul className="text-sm">
        <li className="flex justify-between items-center  hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {title}
          <KeyboardArrowRightIcon />
        </li>
        <li className="flex justify-between items-center  hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {one} <KeyboardArrowRightIcon />
        </li>
        <li className="flex justify-between items-center  hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {two} <KeyboardArrowRightIcon />
        </li>
        <li className="flex justify-between items-center  hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {three} <KeyboardArrowRightIcon />
        </li>
      </ul>
    </div>
  );
};
