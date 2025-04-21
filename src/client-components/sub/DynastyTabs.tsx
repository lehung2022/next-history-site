"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

type Dynasty = { id: string; name: string };

const DynastyTabs = ({
  dynasties,
  initialActiveTab,
}: {
  dynasties: Dynasty[];
  initialActiveTab: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dynastyParam = searchParams.get("dynasty");
    setActiveTab(dynastyParam || initialActiveTab);
  }, [searchParams, initialActiveTab]);

  useEffect(() => {
    checkScrollLimits();
  }, []);

  const checkScrollLimits = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScrollLimits, 300);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScrollLimits, 300);
    }
  };

  const handleSetActiveTab = (id: string) => {
    setActiveTab(id);
    router.push(`/generals/tuong-quan-viet-nam?dynasty=${id}`, {
      scroll: false,
    });
  };

  return (
    <div className="w-full max-w-5xl px-4">
      <div className="bg-black/50 border-2 border-white rounded-lg p-4 mb-6 relative">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
            canScrollLeft
              ? "hover:bg-gray-600"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaArrowLeft />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-2 " // Bỏ gap
        >
          {dynasties.map((dynasty, index) => (
            <button
              key={dynasty.id}
              onClick={() => handleSetActiveTab(dynasty.id)}
              className={`flex-1 min-w-[120px] px-4 py-2 text-base rounded-lg ${
                activeTab === dynasty.id
                  ? "bg-amber-500 text-black border-b-2 border-amber-500"
                  : "bg-black/50 text-gray-200 border-b-2 border-transparent"
              } hover:bg-amber-400 active:bg-amber-400 transition-all duration-300 ${
                index < dynasties.length - 1 ? "border-r-2 border-white/50" : ""
              }`}
            >
              {dynasty.name}
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
            canScrollRight
              ? "hover:bg-gray-600"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DynastyTabs;
