import React from "react";
import axios from "axios";
// import { Products } from "../components/Home/Products";

export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.vercel.app/amazonproducts"
  );
  return products;
}
