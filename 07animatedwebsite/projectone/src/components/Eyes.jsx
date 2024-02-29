import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let horizontalLocation = e.clientX;
      let verticalLocation = e.clientY;

      let deltaHorizontalLocation = horizontalLocation - window.innerWidth / 2;
      let deltaVerticalLocation = verticalLocation - window.innerHeight / 2;

      let angleInDgree =
        Math.atan2(deltaVerticalLocation, deltaHorizontalLocation) *
        (180 / Math.PI);

      setRotate(angleInDgree - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed='-.7' className="relative w-full h-full bg-cover bg-center bg-[url('/src/assets/roundimage.jpg')]">
        <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%]">
          <div className="h-[15vw] bg-white w-[15vw] rounded-full flex items-center justify-center">
            <div className="h-[10vw] bg-black w-[10vw] rounded-full relative">
              <div
                style={{
                  transform: ` translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="h-[1.5vw] rotate-12 w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] px-1"
              >
                <div className="rounded-full h-full w-[1.5vw] bg-white"></div>
              </div>
            </div>
          </div>
          <div className="h-[15vw] bg-white w-[15vw] rounded-full flex items-center justify-center ">
            <div className="h-[10vw] bg-black w-[10vw] rounded-full relative">
              <div
                style={{
                  transform: ` translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="h-[1.5vw] rotate-12 w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] px-1"
              >
                <div className="rounded-full h-full w-[1.5vw] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
