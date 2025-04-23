// src/client-components/main/Footer.tsx
"use client";
import React, { useState, useEffect } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { useAboutStore } from "@/store/about";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const { language } = useAboutStore();

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Debug: Log render
  useEffect(() => {
    console.log("Footer rendered");
  }, []);

  const year = new Date().getFullYear();
  const copyright = `©${year} Chronicles of Valor. All rights reserved.`;
  const contactText = language === "Vietnamese" ? "Liên hệ" : "Contact Me";
  const formattedDate = currentTime
    ? currentTime.toLocaleDateString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
    : "Updating date...";
  const formattedTime = currentTime
    ? currentTime.toLocaleTimeString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
    : "Updating time...";

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 w-full bg-transparent backdrop-blur-sm text-white p-4 z-20"
      id="site-footer"
    >
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
            <span>{contactText}</span>
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
