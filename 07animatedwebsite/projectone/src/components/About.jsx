import React from "react";

function About() {
  return (
    <div className="w-full p-20 rounded-tl-2xl rounded-tr-2xl bg-[#CDEA68] text-black">
      <h1
        className="text-[3.5vw] leading-[3vw] tracking-tighter
      font-[Neue_Montreal]"
      >
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="border-t-[1px] border-[#212121] mt-16 w-full pt-3 flex gap-5">
        <div className="w-[40%]">
          <h1 className="text-5xl font-[Neue_Montreal]">Our approach:</h1>
          <button className="py-4 px-6 text-[12px] bg-black flex items-center justify-center gap-8 rounded-full text-white uppercase mt-5 font-medium">
            read more <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-[60%] h-[70vh] rounded-md overflow-hidden">
          <img src="/src/assets/Homepage.jpg" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
