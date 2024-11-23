"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-[30px] py-[5px] text-[white] sticky top-[0] [box-shadow:rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] z-10">
      <div className="text-[33px] font-bold">
        <a href="/" className="flex items-center no-underline text-[white]">
          <Image
            src="/image/pf-logo.png"
            width={100}
            height={100}
            alt="Logo"
            className="logo"
          />
          <h1>M.GEN.</h1>
        </a>
      </div>

      <button className="flex flex-col gap-[5px] md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`menu-bar w-[25px] h-[3px] bg-black transition-all ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
        <span className={`menu-bar w-[25px] h-[3px] bg-black transition-all ${isMenuOpen ? "hidden" : ""}`}></span>
        <span className={`menu-bar w-[25px] h-[3px] bg-black transition-all ${isMenuOpen ? "-rotate-45 translate-y-[0.5px]" : ""}`}></span>
      </button>

      <ul className={`flex gap-[20px] list-none text-xl md:flex ${isMenuOpen ? "flex flex-col absolute top-[100px] right-0 w-full text-center gap-[20px] py-4 opacity-70" : "hidden" } `}>
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transform all duration-500 hover:bg-[#a22a2a90]">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transform all duration-500 hover:bg-[#a22a2a90]">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transform all duration-500 hover:bg-[#a22a2a90]">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transform all duration-500 hover:bg-[#a22a2a90]">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transform all duration-500 hover:bg-[#a22a2a90]">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
