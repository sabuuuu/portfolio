"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    id: 1,
    title: "About",
    path: "#about",
  },
  {
    id: 2,
    title: "Projects",
    path: "#projects",
  },
  {
    id: 3,
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 border-b border-opacity-30 border-gray-300">
      <div className="flex flex-wrap items-center justify-between mx-auto px-12 lg:px-28 py-6">
        <Link
          href="/"
          className="text-xl text-white font-semibold"
        >
          <Image src="/assets/logo2.png" alt="hero" 
              className='rounded-full' 
              width={44} 
              height={44} />
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    key={link.id}
                    title={link.title}
                    href={link.path}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar; 