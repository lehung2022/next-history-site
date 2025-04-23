// src/client-components/main/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSearchStore } from "@/store/search";
import { useAboutStore } from "@/store/about";

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
  const { query, setQuery } = useSearchStore();
  const { language } = useAboutStore(); // Chuẩn bị đa ngôn ngữ
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeSearch = () => setIsSearchOpen(false);

  const handleSearchSubmit = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");
      closeSearch();
    }
  };

  // Placeholder theo ngôn ngữ (tạm thời)
  const placeholder = language === "Vietnamese" ? "Tìm kiếm..." : "Search...";

  const inputClassName =
    "p-2 pr-8 rounded-md bg-transparent backdrop-blur-sm text-white w-full md:focus:w-[192px] md:transition-all md:duration-300";

  return (
    <>
      <nav className="bg-transparent backdrop-blur-sm text-white p-4 fixed w-full top-0 z-20">
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
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                className={inputClassName}
              />
              <FaSearch
                size={16}
                aria-label="Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleSearchSubmit}
              />
            </div>
            <div className="md:hidden flex items-center flex-shrink-0 w-12 justify-end">
              <FaSearch
                size={24}
                aria-label="Open search"
                className="cursor-pointer"
                onClick={toggleSearch}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay cho hamburger menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="overlay"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Sidebar menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 bg-gray-800/50 text-white flex flex-col items-center gap-6 py-6 z-40 w-full md:w-64 h-screen"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
                  className="text-xl hover:text-blue-400 active:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay cho search trên Mobile */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            data-testid="search-bg-overlay"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeSearch}
          />
        )}
      </AnimatePresence>

      {/* Search overlay (Mobile only) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            data-testid="search-overlay"
            className="fixed top-0 left-0 w-full h-screen bg-gray-800/90 text-white z-40 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              onClick={closeSearch}
              aria-label="Close search"
              className="absolute top-4 left-4 text-2xl z-50"
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
                  placeholder={placeholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                  className={inputClassName}
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
