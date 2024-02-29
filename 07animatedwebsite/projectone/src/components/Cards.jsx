import React from "react";
import { FaStar } from "react-icons/fa6";

function Cards() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center gap-3 p-[4vw] ">
      <div className="h-72 w-[40%] bg-green-800 rounded-md p-5">
        <h1 className="text-[5vw] font-[Poppins] font-semibold tracking-tight leading-none ml-[30%] mt-[25%]">
          ochi
        </h1>
        <button className="mt-[10%] border border-white px-2 py-1 rounded-full">
          &copy; 2019-2024
        </button>
      </div>
      <div className="h-72 w-[60%] flex items-center gap-3">
        <div className="h-full w-1/2 bg-green-800 opacity-70 rounded-md flex items-center justify-center ">
          <div className="flex items-center justify-center flex-col relative w-full">
            <h1 className="text-[4vw] font-[Poppins] font-semibold">Clutch</h1>
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <button className="border border-white px-2 py-1 rounded-full absolute mr-[65%] mt-[55%]">
              &copy; 2019
            </button>
          </div>
        </div>
        <div className="h-full w-1/2 flex justify-center items-center relative flex-col p-5 bg-[#212121] rounded-md">
          <div className=" w-full flex items-center justify-center">
            <img src="src/assets/logo003.png" className="h-20" />
          </div>
          <div className="w-full relative ">
            <h2 className="absolute top-8 py-1 px-2 border border-white rounded-full">
              &copy; 2024
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
