// src/client-components/main/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars, FaSearch } from "react-icons/fa";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dynasties", label: "Dynasties" },
  { href: "/generals", label: "Generals" },
  { href: "/timelines", label: "Timelines" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (
      e.type === "keydown" &&
      (e as React.KeyboardEvent<HTMLInputElement>).key !== "Enter"
    )
      return;

    const searchQuery = query; // Chỉ dùng state query
    if (searchQuery) {
      router.push(`/search_result?q=${searchQuery}`);
    }
  };

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <FaBars size={24} />
            </button>
            <div
              className={`fixed top-16 left-0 bg-gray-800 text-white flex flex-col items-center gap-6 py-6 transform transition-transform duration-1000 ease-in-out z-20 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } md:w-64 md:h-auto w-full h-screen`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-xl hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-grow flex justify-center">
            <Link href="/" className="text-xl md:text-2xl font-bold">
              Chronicles of Valor
            </Link>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="p-2 rounded-md bg-gray-700 text-white w-24 md:w-40 focus:w-48 transition-all duration-300"
            />
            <button onClick={handleSearch} aria-label="Search">
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
