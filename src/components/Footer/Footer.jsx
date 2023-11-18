import React from "react";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";
import { FooterMiddle } from "./FooterMiddle";

export const Footer = () => {
  return (
    <div className="font-titleFont">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};
