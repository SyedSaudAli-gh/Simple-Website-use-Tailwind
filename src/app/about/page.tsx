import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="w-full min-h-[70vh] text-[rgba(255, 255, 255, 0.922)]">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-[30px] font-[cursive] text-white text-center">
          <h1 className="text-[40px] md:text-[50px] font-bold">
            <span className="uppercase text-[#a22a2a90] [text-shadow:2px_2px_4px_rgba(255,_255,_255,_0.199)]">
              About
            </span>{" "}
            Us
          </h1>
          <h2 className="text-[18px] md:text-[22px]">
            52 Years Of Experience In Hair cut!
          </h2>
          <p className="mx-[20px] sm:mx-[50px] md:mx-[150px] lg:mx-[300px] text-sm sm:text-base font-medium leading-[1.8] md:leading-[2]">
            "Brook presents your services with flexible, convenient and modern
            layouts. You can select your favorite layouts & elements for
            various sections with unlimited customization possibilities.
            Pixel-perfect replication of the designer’s intention. Brook
            presents your services with flexible, convenient, and multipurpose
            layouts."
          </p>
          <div className="relative w-full max-w-[900px]">
            <Image
              src="/image/about-shape.png.webp"
              width={900}
              height={500}
              alt="about-shape"
              className="w-full h-auto mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
