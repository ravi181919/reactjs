import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div>
      <div className="h-screen w-full bg-black pt-1 ">
        <div className="text mt-36 px-20">
            {['we create', 'eye-opening', 'presentations'].map((item,index)=> {
                return ( 
                <div className="marker">
                <div className="w-fit flex">
                    {index === 1 && <div className='w-[8.3vw] h-[4.5vw] relative bottom-[0.5vw]  rounded-sm bg-red-300 mr-4 left-1'>
                </div>}
                <h1 className="uppercase font-['Founders_Grotesk']  text-[7vw] tracking-tight leading-[6.2vw] font-medium ">{item}
                </h1>
                </div>
                </div> )})}
        </div>
        <div className="border-t border-zinc-700 mt-16 flex items-center justify-between py-3 px-20">
            {['For public and private companies', 'From the first pitchto IPO'].map((item, index) => (
            <p className='text-[14px] font-[Poppins] leading-none'>{item}</p>
            ))}
            <div className="start flex justify-center items-center gap-2">
                <div className="rounded-full text-[13px] font-[Poppins] py-2 px-4 border-2 border-zinc-400  uppercase">start the project</div>
                <div className="rounded-full w-8 h-8 flex items-center justify-center border-2 border-zinc-400 ">
                    <span className='rotate-45'>
                        <FaLongArrowAltUp />
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
