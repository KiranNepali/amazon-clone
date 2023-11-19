import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector } from "react-redux";

export const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect((item) => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total);
    });
  }, []);
  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="container grid grid-cols-5 gap-8 mx-auto h-auto">
        <div className="w-full h-full bg-white px-4 col-span-4">
          <div className="flex justify-between items-center font-titleFont border-b-[1px] py-3">
            <h2 className="text-3xl font-medium">Shopping cart</h2>
            <h4 className="text-xl font-normal">Subtitle</h4>
          </div>
          {/* prducts  */}
          <div>
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full border-b-[1px] border-b-gray-300 p-4 flex justify-between items-center gap-6"
              >
                <div className="w-1/5">
                  <img
                    className="w-full h-44 object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="w-4/5">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="pr-10  text-sm">
                    {item.description.substring(0, 100)}...
                  </p>
                  <p className="text-base font-semibold">${item.price}</p>
                  <div className="flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md bg-[#F0F2F2]">
                    <p>Qty</p>
                    <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">
                      -
                    </p>
                    <p>{item.quantity}</p>
                    <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">
                      +
                    </p>
                  </div>
                  <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">
                    Delete
                  </button>
                </div>
                <div>
                  <p className="text-lg font-titleFont font-semibold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full py-2">
            <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 mb-2 hover:bg-red-700 active:bg-red-900 duration-300 ">
              Clear cart
            </button>
          </div>
          {/* products end */}
        </div>

        <div className="w-full  bg-white col-span-1 h-52 flex flex-col items-center p-4">
          <div>
            <p className="flex gap-2 items-start text-sm ">
              <span className="bg-white text-green-500 rounded-full">
                <CheckCircleIcon />
              </span>
              Your order qualities for free shipping choose this option at
              checkout. See details...
            </p>
          </div>
          <div>
            <p>
              Total: <span className="text-lg font-bold ">${totalPrice}</span>
            </p>
          </div>
          <button className="w-full  font-medium rounded-md py-1.5 mt-3 font-titleFonttext-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yello-300 hover:to-yellow-500 border border-yellow-500  hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};
