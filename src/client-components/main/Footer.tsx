"use client";
import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [event, setEvent] = useState<string>("Loading event...");

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      const today = currentTime
        ? currentTime
            .toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" })
            .split("/")
            .join("-")
        : "";
      const fakeApiResponse =
        today === "04-03"
          ? "Lý Thường Kiệt đánh quân Tống (1075)"
          : "No event today";
      setEvent(fakeApiResponse);
    };

    if (currentTime) fetchEvent();
  }, [currentTime]);

  const copyright = "©2025 Chronicles of Valor. All rights reserved.";
  const formattedDate = currentTime
    ? currentTime.toLocaleDateString()
    : "Loading...";
  const formattedTime = currentTime
    ? currentTime.toLocaleTimeString()
    : "Loading...";

  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p>{copyright}</p>
        </div>
        <div className="text-center flex items-center justify-center gap-2">
          <FaCalendarAlt size={20} />
          <p className="truncate max-w-xs">{event}</p>
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
