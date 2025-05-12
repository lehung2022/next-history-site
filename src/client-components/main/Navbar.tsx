"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSearchStore } from "@/store/search";
import { useAboutStore } from "@/store/about";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

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
  const { language } = useAboutStore();
  const router = useRouter();
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  // Set focus cho input desktop khi mount
  useEffect(() => {
    if (desktopInputRef.current && window.innerWidth >= 768) {
      desktopInputRef.current.focus();
    }
  }, []);

  // Set focus cho input mobile khi search overlay mở
  useEffect(() => {
    if (isSearchOpen && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeSearch = () => setIsSearchOpen(false);

  const handleSearchSubmit = () => {
    if (!query.trim()) {
      alert("Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setQuery("");
    closeSearch();
  };

  const placeholder = "Tìm kiếm...";

  const desktopInputClassName =
    "p-2 pr-8 rounded-md bg-gray-800/50 text-white w-48 border border-gray-300";
  const mobileInputClassName =
    "p-2 rounded-md bg-gray-800/50 text-white w-full border border-gray-300";

  return (
    <>
      <nav className="bg-transparent backdrop-blur-sm text-white p-4 fixed w-full top-0 z-20">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-2 min-w-[320px]">
          <div className="relative flex items-center justify-between w-full">
            <div className="flex-shrink-0 w-12">
              <MotionDiv
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="flex items-center justify-center"
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? "✕" : <FaBars size={24} />}
              </MotionDiv>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link
                href="/"
                className="text-xl md:text-2xl font-bold whitespace-nowrap"
              >
                Chronicles of Valor
              </Link>
            </div>
            <div className="hidden md:flex items-center flex-shrink-0 w-48 relative">
              <input
                ref={desktopInputRef}
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                className={desktopInputClassName}
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

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
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

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
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
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <MotionDiv
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

      <AnimatePresence>
        {isSearchOpen && (
          <MotionDiv
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
                  ref={mobileInputRef}
                  type="text"
                  placeholder={placeholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                  className={mobileInputClassName}
                />
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
