import React, { useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Products = () => {
  // useEffect(() => {
  //   async function ProductsData() {
  //     let data = await axios.get(
  //       "https://fakestoreapiserver.vercel.app/amazonproducts"
  //     );
  //     console.log(data.data);
  //   }
  //   ProductsData();
  // }, []);

  const data = useLoaderData();
  const productData = data.data;

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10  px-4">
      {productData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200     flex flex-col gap-4 relative"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group  ">
            <img
              className="w-52 h-64 object-contain "
              src={item.image}
              alt="ProductImg"
            />
            {/* product drop down  */}
            <ul className="w-full h-36 bg-gray-100 absolute bottom-[-180px]  flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1  border-r  group-hover:bottom-0 duration-700">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View details
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to wishlist
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>
          {/* end  */}

          <div className="z-10 bg-white flex flex-col items-start justify-between px-4">
            <div className="w-full flex justify-between items-center">
              <h2 className="font-titleFont tracking-wide text-amazon_blue font-medium text-lg">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm font-semibold text-gray-600">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 100)}...</p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button className="w-full  font-medium rounded-md py-1.5 mt-3 font-titleFonttext-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yello-300 hover:to-yellow-500 border border-yellow-500  hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200  ">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
