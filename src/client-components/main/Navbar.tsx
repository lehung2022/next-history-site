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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeSearch = () => setIsSearchOpen(false);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    console.log("Search:", searchQuery);
    setSearchQuery("");
    closeSearch();
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      {/* Overlay cho Hamburger Menu */}
      {isOpen && (
        <div
          data-testid="overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
          onClick={closeMenu}
        />
      )}

      {/* Overlay cho Search trên Mobile */}
      {isSearchOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gray-800/90 transform transition-transform duration-1000 ease-in-out z-20 md:hidden ${
            isSearchOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={closeSearch}
            aria-label="Close search"
            className="absolute top-4 left-4 text-2xl z-30"
          >
            ✕
          </button>
          <div
            className="flex justify-center w-full mt-12 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 rounded-md bg-gray-700 text-white w-full"
                onKeyDown={handleSearch}
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-2">
        <div className="relative flex items-center justify-between w-full">
          {/* Hamburger Button */}
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

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-xl md:text-2xl font-bold">
              Chronicles of Valor
            </Link>
          </div>

          {/* Search trên Desktop */}
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
              onClick={() => {
                console.log("Search:", searchQuery);
                setSearchQuery("");
                closeSearch();
              }}
            />
          </div>

          {/* Search Icon trên Mobile */}
          <div className="md:hidden flex items-center flex-shrink-0 w-12 justify-end">
            <FaSearch
              size={24}
              aria-label="Open search"
              className="cursor-pointer"
              onClick={toggleSearch}
            />
          </div>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`fixed top-0 left-0 bg-gray-800/50 text-white flex flex-col items-center gap-6 py-6 transform transition-transform duration-1000 ease-in-out z-20 ${
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
          <div className="flex flex-col justify-center items-center gap-6 h-full">
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
      </div>
    </nav>
  );
};

export default Navbar;