"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dynasties", label: "Dynasties" },
  { href: "/generals", label: "Generals" },
  { href: "/timelines", label: "Timelines" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<SVGElement>
  ) => {
    if (
      e.type === "keydown" &&
      (e as React.KeyboardEvent<HTMLInputElement>).key !== "Enter"
    ) {
      return;
    }
    console.log("Search:", searchQuery);
    setSearchQuery("");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      {isOpen && (
        <div
          data-testid="overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
          onClick={closeMenu}
        />
      )}

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-2">
        <div className="relative flex items-center justify-between w-full">
          <div className="flex-shrink-0 w-12">
            <motion.button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="flex items-center justify-center"
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isOpen ? "✕" : <FaBars size={24} />}
            </motion.button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-xl md:text-2xl font-bold">
              Chronicles of Valor
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-shrink-0 w-48 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pr-8 rounded-md bg-gray-700 text-white w-full focus:w-[192px] transition-all duration-300"
              onKeyDown={handleSearch}
            />
            <FaSearch
              size={16}
              aria-label="Search"
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 bg-gray-800 text-white flex flex-col items-center gap-6 py-6 transform transition-transform duration-1000 ease-in-out z-20 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:w-64 w-full h-screen`}
        >
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-2xl"
          >
            ✕
          </button>
          <div className="mt-8 flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-xl hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:hidden w-full flex justify-center">
          <div className="flex items-center w-48 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pr-8 rounded-md bg-gray-700 text-white w-full focus:w-[192px] transition-all duration-300"
              onKeyDown={handleSearch}
            />
            <FaSearch
              size={16}
              aria-label="Search"
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
