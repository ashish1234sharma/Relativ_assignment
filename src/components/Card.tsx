import React from "react";
import { cardDataProps } from "../types";
import BITCOIN from "../assets/bitcoin.png";

const Card = ({
  crypto,
  icon,
  sortName,
  price,
  pvl,
  performance,
  performance_status,
  popular_pair,
}: cardDataProps) => {
  return (
    <div className="w-56 h-96  flex flex-col-reverse">
      <div className="w-full bg-zinc-700 shadow-lg  bg-opacity-25  rounded-2xl h-5/6  flex flex-col  items-center ">
        
        <div className=" w-28 h-28  flex -mt-12 rounded-full bg-slate-900"></div>
        <div className=" w-full ">
          <p className="font-sans font-semibold text-slate-400 text-sm">
            {crypto} ({sortName})
          </p>
        </div>
        <div className=" w-48 my-2 py-1 shadow-md rounded-full bg-slate-900 flex justify-center items-center ">
          <p className="font-sans font-semibold text-slate-400 self-center ">
            ${price}
          </p>
          {performance_status == "negative" ? (
            <p className="font-sans text-red-500 font-semibold text-slate-400 ml-3 text-sm">
              {performance}%
            </p>
          ) : (
            <p className="font-sans text-green-800 font-semibold text-slate-400 ml-2 text-sm">
              {performance}%
            </p>
          )}
        </div>
        <div className=" w-full ">
          <p className="font-sans font-semibold text-slate-400 text-sm">
            Price
          </p>
        </div>
        <div className=" w-48 my-2 shadow-md py-1 rounded-full bg-slate-900 flex justify-center items-center  ">
          <p className="font-sans font-semibold text-slate-400  self-center">
            ${pvl}
          </p>
        </div>
        <div className=" w-full ">
          <p className="font-sans font-semibold text-slate-400 text-sm">TVL</p>
        </div>
        <div className=" w-28 my-2 shadow-md py-1 px-3 rounded-full bg-slate-900 flex justify-between items-center  ">
          {popular_pair.map((image, index) => {
            return (
              <div className="w-5 h-5 resize" key={index}>
                <img src={image} />
              </div>
            );
          })}
        </div>
        <div className=" w-full ">
          <p className="font-sans font-semibold text-slate-400 text-sm">
            Popular pairs
          </p>
        </div>
        {/* <div className="absolute inset-0 bg-zinc-700 opacity-75 border"></div> */}
      </div>
      <div className="w-24 h-24  bg-zinc-700 relative bg-opacity-25 rounded-full m-auto -mb-12 flex justify-center items-center">
        <div className="w-12 h-12 rounded-full  resize flex justify-center items-center ">
          <img className="w-full h-full" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default Card;
