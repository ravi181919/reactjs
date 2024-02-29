import React from "react";
import { motion } from 'framer-motion';
function ScrollText() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.3' className="w-full rounded-tl-2xl  rounded-tr-2xl bg-[#014D43] py-20 ">
      <div className="border-t-[1px] border-b-[1px] border-white flex whitespace-nowrap gap-10 overflow-hidden">
        <motion.h1 
        initial={{x:'0'}}
        animate={{x:'-100%'}}
        transition={{repeat:Infinity, ease:'linear', duration:10}}
        className='font-semibold text-[23vw] uppercase leading-none font-["Founders_Grotesk"] pt-[4vw] -mb-[5vw] '>
          We are ochi
        </motion.h1>

        <motion.h1 
         initial={{x:'0'}}
         animate={{x:'-100%'}}
         transition={{repeat:Infinity, ease:'linear', duration:10}}
        className='font-semibold text-[23vw] uppercase leading-none font-["Founders_Grotesk"] pt-[4vw] -mb-[5vw] '>
          We are ochi
        </motion.h1>

        <motion.h1
         initial={{x:'0'}}
         animate={{x:'-100%'}}
         transition={{repeat:Infinity, ease:'linear', duration:10}}
         className='font-semibold text-[23vw] uppercase leading-none font-["Founders_Grotesk"] pt-[4vw] -mb-[5vw] '>
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default ScrollText;
