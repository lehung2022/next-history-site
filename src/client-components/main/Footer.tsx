"use client";
import React, { useState, useEffect } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null); // Start with null

  useEffect(() => {
    setCurrentTime(new Date()); // Set initial time after mount
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!currentTime) {
    return (
      <footer className="bg-gray-800 text-white p-4 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p>
              ©{new Date().getFullYear()} Chronicles of Valor. All rights
              reserved.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <FaEnvelope size={20} />
              <span>Contact Me</span>
            </Link>
          </div>
          <div className="text-center md:text-right flex items-center justify-center md:justify-end gap-2">
            <BsCalendar2DateFill size={20} />
            <p>Loading...</p>
          </div>
          <div className="text-center md:text-right flex items-center justify-center md:justify-end gap-2">
            <CiClock2 size={20} />
            <p>Loading...</p>
          </div>
        </div>
      </footer>
    );
  }

  const copyright = `©${currentTime.getFullYear()} Chronicles of Valor. All rights reserved.`;
  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p>{copyright}</p>
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <FaEnvelope size={20} />
            <span>Contact Me</span>
          </Link>
        </div>
        <div className="text-center md:text-right flex items-center justify-center md:justify-end gap-2">
          <BsCalendar2DateFill size={20} />
          <p>{formattedDate}</p>
        </div>
        <div className="text-center md:text-right flex items-center justify-center md:justify-end gap-2">
          <CiClock2 size={20} />
          <p>{formattedTime}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
