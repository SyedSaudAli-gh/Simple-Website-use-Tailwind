import React from "react";
import Image from "next/image";

function Services() {
  return (
    <div className="w-full h-auto">
      <div className="text-white flex flex-col justify-center items-center gap-[50px] text-center mt-[10px] font-[cursive]">
        <h2 className="font-bold text-2xl">
          <span className="text-[#a22a2a90] uppercase [text-shadow:2px_2px_4px_rgba(255,_255,_255,_0.199)]">
            Professional
          </span>{" "}
          Services
        </h2>
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] mx-[20px] sm:mx-[100px] md:mx-[300px] font-extrabold uppercase">
          Our Best services that we offering to you
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-[20px] sm:mx-[50px] md:mx-[100px] my-[30px]">
        <div className="h-[600px] flex flex-col justify-center items-center gap-[30px] bg-[#00000065] text-[white] rounded-[10px] [transition:transform_0.5s_ease] [box-shadow:5px_4px_6px_rgba(255,_255,_255,_0.5)] hover:bg-[#000] hover:scale-105">
          <Image
            src="/image/hair-cut-1.png"
            width={120}
            height={120}
            alt="Stylish Hair Cut"
            className="bg-[white] rounded-[10px]"
          />
          <span className="text-[30px] font-[math]">Stylish Hair Cut</span>
          <p className="mx-[30px] sm:mx-[50px] text-center text-[16px] sm:text-[18px]">
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

        <div className="h-[600px] flex flex-col justify-center items-center gap-[30px] bg-[#00000065] text-[white] rounded-[10px] [transition:transform_0.5s_ease] [box-shadow:5px_4px_6px_rgba(255,_255,_255,_0.5)] hover:bg-[#000] hover:scale-105">
          <Image
            src="/image/massege.png"
            width={120}
            height={120}
            alt="Body Massage"
            className="bg-[white] rounded-[10px]"
          />
          <span className="text-[30px] font-[math]">Body Massage</span>
          <p className="mx-[30px] sm:mx-[50px] text-center text-[16px] sm:text-[18px]">
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

        <div className="h-[600px] flex flex-col justify-center items-center gap-[30px] bg-[#00000065] text-[white] rounded-[10px] [transition:transform_0.5s_ease] [box-shadow:5px_4px_6px_rgba(255,_255,_255,_0.5)] hover:bg-[#000] hover:scale-105">
          <Image
            src="/image/Breard Style.JPG"
            width={120}
            height={120}
            alt="Beard Style"
            className="bg-[white] rounded-[10px]"
          />
          <span className="text-[30px] font-[math]">Beard Style</span>
          <p className="mx-[30px] sm:mx-[50px] text-center text-[16px] sm:text-[18px]">
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

        <div className="h-[600px] flex flex-col justify-center items-center gap-[30px] bg-[#00000065] text-[white] rounded-[10px] [transition:transform_0.5s_ease] [box-shadow:5px_4px_6px_rgba(255,_255,_255,_0.5)] hover:bg-[#000] hover:scale-105">
          <Image
            src="/image/Breard Style.JPG"
            width={120}
            height={120}
            alt="Beard Style"
            className="bg-[white] rounded-[10px]"
          />
          <span className="text-[30px] font-[math]">Beard Style</span>
          <p className="mx-[30px] sm:mx-[50px] text-center text-[16px] sm:text-[18px]">
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

        <div className="h-[600px] flex flex-col justify-center items-center gap-[30px] bg-[#00000065] text-[white] rounded-[10px] [transition:transform_0.5s_ease] [box-shadow:5px_4px_6px_rgba(255,_255,_255,_0.5)] hover:bg-[#000] hover:scale-105">
          <Image
            src="/image/massege.png"
            width={120}
            height={120}
            alt="Body Massage"
            className="bg-[white] rounded-[10px]"
          />
          <span className="text-[30px] font-[math]">Body Massage</span>
          <p className="mx-[30px] sm:mx-[50px] text-center text-[16px] sm:text-[18px]">
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

        <div className="h-[600px] flex flex-col justify-center items-center gap-[30px] bg-[#00000065] text-[white] rounded-[10px] [transition:transform_0.5s_ease] [box-shadow:5px_4px_6px_rgba(255,_255,_255,_0.5)] hover:bg-[#000] hover:scale-105">
          <Image
            src="/image/hair-cut-1.png"
            width={120}
            height={120}
            alt="Stylish Hair Cut"
            className="bg-[white] rounded-[10px]"
          />
          <span className="text-[30px] font-[math]">Stylish Hair Cut</span>
          <p className="mx-[30px] sm:mx-[50px] text-center text-[16px] sm:text-[18px]">
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
