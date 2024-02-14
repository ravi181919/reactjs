import React from 'react'

function FeaturedProjects() {
  return (
    <div className='w-full py-20 flex flex-col gap-14'>

        <div className="px-10 border-b-[1px] border-zinc-700 pb-8">
            <h1 className='font-[Poppins] tracking-tight text-[4vw]'>Featured projects</h1>
        </div>

        <div className="px-10">
        <div className="flex w-full gap-5">
          <div className="w-1/2 h-[40vw] relative">   
          <div className="absolute z-10 top-1/2 left-full -translate-x-1/2">
          <h1 className='font-[Poppins] text-[7vw] tracking-tighter font-medium text-[#CDEA68]'>
          {'FYDE'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
            </div>  
            <div className="h-8 w-full">
              <div className='flex items-center gap-2'>
                <div className="h-[0.8vw] w-[0.8vw] rounded-full bg-white"></div>
                 <h1 className='font-[Poppins] text-[1vw]'>FYDE</h1>
              </div>
            </div>
              <div className="w-full h-full rounded-md overflow-hidden hover:scale-95 transition-all">
                <img className='w-full h-full bg-cover' src="/src/assets/reDelegate.png" />
              </div>
              <div className="h-10 w-full mt-2 flex items-center gap-8">
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">audit</button>
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">copywriting</button>
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">sales deck</button>
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">slides design</button>
              </div>
          </div>

            <div className="w-1/2 h-[40vw] relative"> 
            <div className="absolute z-10 top-1/2 right-full translate-x-1/2">
            <h1 className='font-[Poppins] text-[7vw] text-[#CDEA68] tracking-tighter font-medium'>
            {'VISE'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
            </h1>
              </div>  
             <div className="h-8 w-full">
              <div className='flex items-center gap-2'>
                <div className="h-[0.8vw] w-[0.8vw] rounded-full bg-white"></div>
                 <h1 className='font-[Poppins] text-[1vw]'>VISE</h1>
              </div>
             </div>
              <div className="w-full h-full rounded-md hover:scale-95 transition-all overflow-hidden ">
                <img className='w-full h-full bg-cover' src="/src/assets/vise.jpg" />
              </div>
              <div className="h-10 w-full mt-2 flex items-center gap-8">
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">agency</button>
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">company presentation</button>
              </div>
            </div>
        </div>
        </div>

        <div className="px-10 pt-16">
        <div className="flex w-full gap-5">

          <div className="w-1/2 h-[40vw] relative">
          <div className="absolute z-10 top-1/2 left-full -translate-x-1/2">
          <h1 className='font-[Poppins] text-[7vw] tracking-tighter font-medium text-[#CDEA68]'>
          {'TRAWA'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
            </div>
            <div className="h-8 w-full">
              <div className='flex items-center gap-2'>
                <div className="h-[0.8vw] w-[0.8vw] rounded-full bg-white"></div>
                 <h1 className='font-[Poppins] text-[1vw]'>TRAWA</h1>
              </div>
            </div>
              <div className="w-full h-full rounded-md overflow-hidden hover:scale-95 transition-all">
                <img className='w-full h-full bg-cover' src="/src/assets/awaimage.jpg" />
              </div>
              <div className="h-10 w-full mt-2 flex items-center gap-8">
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">brand identity</button>
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">design research</button>
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">investor deck</button>
              </div>
          </div>

            <div className="w-1/2 h-[40vw] relative"> 
            <div className="absolute z-10 top-1/2 right-full translate-x-1/2">
          <h1 className='font-[Poppins] text-[7vw] tracking-tighter font-medium text-[#CDEA68]'>
          {'PREMIUMBLEND'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
            </div>
             <div className="h-8 w-full">
              <div className='flex items-center gap-2'>
                <div className="h-[0.8vw] w-[0.8vw] rounded-full bg-white"></div>
                 <h1 className='font-[Poppins] text-[1vw]'>PREMIUM BLEND</h1>
              </div>
             </div>
              <div className="w-full h-full rounded-md hover:scale-95 transition-all overflow-hidden ">
                <img className='w-full h-full bg-cover' src="/src/assets/bean.png" />
              </div>
              <div className="h-10 w-full mt-2 flex items-center gap-8">
                <button  className="uppercase rounded-full border-[0.11vw] border-white py-[0.4vw]  px-[1vw] text-[1vw] font-[Poppins] text-white">branded template</button>
              </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default FeaturedProjects
