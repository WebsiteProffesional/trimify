"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-700 text-white">
      <div className="flex justify-between items-center p-3 h-[62px]">
        {/* Logo + Slogan */}
        <div className="md:flex flex-col sm:flex-row sm:items-center py-[2px] ">
          <h1 className="text-3xl md:text-4xl bree text-center text-white mb-[-2px] ml-[-1px] z-[10px]">
            TRIMIFY
          </h1>
          <p className="ml-3 md:ml-1 md:mt-4 text-white text-sm font-extrabold">
            Shorten smart · Share fast
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-3 text-xl">
          <li
            title="Click to redirect to homepage"
            className="transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] px-2 py-[2px]"
          >
            <Link 
            title="Home section of Trimify"
            aria-label="Home section of Trimify"
            href="/">Home</Link>
          </li>
          <li
         
            className="transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] px-2 py-[2px]"
          >
            <Link 
            title="About Trimify section"
            aria-label="About Trimify section"
            href="/about">About</Link>
          </li>
          <li
            title="Click to redirect to contact page"
            className="transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] px-2 py-[2px]"
          >
            <Link
            title="
            Contact Trimify section"
            aria-label="Contact Trimify section"
            href="/contact">Contact</Link>
          </li>
          <li
            title="Click to create new account"
            className="bg-slate-600 font-bold text-black rounded-[12px] transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-white hover:text-black px-2 pb-1"
          >
            <Link 
            title="Sign up for Trimify"
            aria-label="Sign up for Trimify"
            href="/sign-up-to-trimify">Sign up</Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
        title="Click to open or close the mobile menu"
        aria-label="Toggle mobile menu"
        name="mobile-menu-toggle"
        className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-start px-4 pb-4 gap-3 md:hidden text-lg">
          <Link
            title="Click to redirect to homepage"
            aria-label="Home section of Trimify"
            href="/"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            title="Click to redirect to about page"
            aria-label="About Trimify section"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
          <Link
            title="Click to redirect to contact page"
            aria-label="Contact Trimify section"
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            title="Click to create new account"
            aria-label="Sign up for Trimify"
            href="/sign-up-to-trimify"
            className="font-bold hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
