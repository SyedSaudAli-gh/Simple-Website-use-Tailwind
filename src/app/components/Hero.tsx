import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center px-[50px]">
        <div className="w-full max-w-[500px] h-auto mx-auto md:ml-0 mb-10">
          <Image
            src="/image/hero.jpg"
            width={500}
            height={500}
            alt="hero"
            className="w-full h-auto"
          />
        </div>

        <div className="text-[white] ml-auto mr-auto text-center font-semibold ">
          <h1 className="text-3xl">
            <span className="font-[system-ui] uppercase [text-shadow:2px_2px_4px_rgba(255,_255,_255,_0.199)] text-[#a22a2a90]">
              <strong className="text-[2.2em]">H</strong>AIR
            </span>{" "}
            <span className="text-[2em]">S</span>ALON
          </h1>
          <h2 className="text-[22px]">STYLISH HAIR SALON</h2>
          <div className="mt-[50px] text-[35px] flex relative top-[50px] font-[Arial,_sans-serif] justify-center flex-wrap">
            <div className="bg-[brown] rounded-[50%] px-[50px] py-[15px] m-[10px] [transition:500ms] hover:px-[70px] hover:py-[25px] hover:text-[40px]">
              <span>
                Up to <br /> 20%
              </span>
            </div>
            <div className="bg-[brown] rounded-[50%] px-[50px] py-[15px] m-[10px] [transition:500ms] hover:px-[70px] hover:py-[25px] hover:text-[40px]">
              <span>
                OFF <br /> Hurry
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] grid grid-cols-[repeat(3,_1fr)] grid-rows-[auto] gap-[10px]">
        <Image
          src="/image/2.jpeg"
          width={10000}
          height={10000}
          alt="hero"
          className="w-full h-auto opacity-50 [transition:0.5s] hover:opacity-100 hover:scale-[0.98] col-start-1 col-end-2"
        />

        <Image
          src="/image/5.png"
          width={10000}
          height={10000}
          alt="hero"
          className="w-full h-auto opacity-50 [transition:0.5s] hover:opacity-100 hover:scale-[0.98] col-start-2 col-end-4"
        />
        <Image
          src="/image/1.jpg"
          width={10000}
          height={10000}
          alt="hero"
          className="w-full h-auto opacity-50 [transition:0.5s] hover:opacity-100 hover:scale-[0.98] -mt-[35px] row-start-2 row-end-3"
        />

        <Image
          src="/image/4.jpg"
          width={10000}
          height={10000}
          alt="hero"
          className="w-full h-auto opacity-50 [transition:0.5s] hover:opacity-100 hover:scale-[0.98] col-start-2 col-end-4"
        />

        <Image
          src="/image/3.jpg"
          width={10000}
          height={10000}
          alt="hero"
          className="w-full h-auto opacity-50 [transition:0.5s] hover:opacity-100 hover:scale-[0.98] style-3"
        />
        <Image
          src="/image/6.png"
          width={10000}
          height={10000}
          alt="hero"
          className="w-full h-auto opacity-50 [transition:0.5s] hover:opacity-100 hover:scale-[0.98] style-6"
        />

        <Image
          src="/image/7.png"
          width={10000}
          height={10000}
          alt="hero"
          className="w-full h-auto opacity-50 [transition:0.5s] hover:opacity-100 hover:scale-[0.98] style-6"
        />
      </div>
    </>
  );
}

export default Hero;
