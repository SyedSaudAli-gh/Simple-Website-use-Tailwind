import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-auto  text-white py-10">
      <div className="w-[90%] mx-auto flex flex-wrap justify-between items-start gap-10">
        <div className="w-full md:w-[30%] text-center md:text-left">
          <div className="text-3xl font-bold flex flex-col items-center md:items-start">
            <a
              href="/"
              className="flex items-center no-underline text-white gap-2"
            >
              <Image
                src="/image/pf-logo.png"
                width={80}
                height={80}
                alt="Logo"
              />
              <h1 className="text-4xl">M.GEN.</h1>
            </a>
          </div>
          <div className="mt-4 text-3xl flex flex-col gap-2">
            <a href="tel:+92-348-2554902" className="no-underline ">
              <span className="text-[#7a3734]">+92-348</span>-2554902
            </a>
            <a href="mailto:saud.saleem93@gmail.com" className="text-xl ">
              saud.saleem93@gmail.com
            </a>
          </div>
        </div>

        <div className="w-full sm:w-auto flex flex-col gap-4 text-gray-400">
          <h1 className="text-3xl font-bold text-white">Location</h1>
          <a
            href="#"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Advanced
          </a>
          <a
            href="#"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Management
          </a>
          <a
            href="#"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Corporate
          </a>
          <a
            href="#"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Customer
          </a>
          <a
            href="#"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Information
          </a>
        </div>

        <div className="w-full sm:w-auto flex flex-col gap-4 text-gray-400">
          <h1 className="text-3xl font-bold text-white">More Detail</h1>
          <Link
            href="/"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-white hover:transition-all hover:text-[22px]"
          >
            Contact
          </Link>
        </div>

        <div className="w-full sm:w-[30%] flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white">Subscribe</h1>
          <p className="text-sm text-gray-300">
            Subscribe now to get daily updates
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Email Address"
              className="py-2 px-4 rounded-l-md bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="py-2 px-4 rounded-r-md bg-[#7a3734] text-white hover:bg-[#5c2b27]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
