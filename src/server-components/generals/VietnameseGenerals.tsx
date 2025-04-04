"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const dynasties = [
  {
    id: "ngo",
    name: "Nhà Ngô",
    generals: [
      {
        id: "duong-tam-kha",
        name: "Dương Tam Kha",
        image: "/vietnamese_generals/duong-tam-kha-02.png",
      },
    ],
  },
  {
    id: "dinh",
    name: "Nhà Đinh",
    generals: [
      {
        id: "dinh-bo-linh-001",
        name: "Đinh Bộ Lĩnh",
        image: "/vietnamese_generals/dinh-bo-linh-02.png",
      },
      {
        id: "dinh-lien-001",
        name: "Đinh Liễn",
        image: "/vietnamese_generals/dinh_lien.jpg",
      },
    ],
  },
  {
    id: "ly",
    name: "Nhà Lý",
    generals: [
      {
        id: "ly-thuong-kiet-001",
        name: "Lý Thường Kiệt",
        image: "/vietnamese_generals/ly_thuong_kiet_02.jpg",
      },
    ],
  },
  {
    id: "hau-le",
    name: "Nhà Hậu Lê (Lê Sơ)",
    generals: [
      {
        id: "dinh-le-001",
        name: "Đinh Lễ",
        image: "/vietnamese_generals/dinh_le.jpg",
      }, // Giả định tên file, cần xác nhận
    ],
  },
  {
    id: "nguyen",
    name: "Nhà Nguyễn",
    generals: [
      {
        id: "nguyen-anh-001",
        name: "Nguyễn Ánh",
        image: "/vietnamese_generals/nguyen_anh_02.png",
      },
    ],
  },
];

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const VietnameseGenerals = () => {
  const [activeTab, setActiveTab] = useState("Nhà Ngô"); // Mặc định là Nhà Đinh
  const [isMounted, setIsMounted] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Thêm kiểu HTMLDivElement

  useEffect(() => {
    setIsMounted(true);
    checkScrollLimits(); // Kiểm tra giới hạn scroll khi mount
  }, []);

  // Kiểm tra giới hạn scroll
  const checkScrollLimits = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Trượt sang trái
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScrollLimits, 300); // Cập nhật sau khi trượt
    }
  };

  // Trượt sang phải
  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScrollLimits, 300); // Cập nhật sau khi trượt
    }
  };

  if (!isMounted) {
    return (
      <div className="flex flex-col items-center text-gray-200">
        <Link
          href="/generals/"
          className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
        >
          ← Back to generals
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold my-8 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
          Vietnamese Generals
        </h1>
        <div className="w-full max-w-5xl px-4">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals/"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to generals
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold my-8 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
        Tướng quân Việt Nam
      </h1>
      {/* Dòng giải thích cố định */}
      <p className="text-lg text-center max-w-3xl mb-6 px-4 bg-black/50 border-2 border-white rounded-lg p-4">
        Danh sách các triều đại Việt Nam sẽ được tính chính thức từ nhà Ngô đổ
        đi. Từ triều đại này trở đi, nước Việt thực sự là một nước độc lập.
        Trước đó tuy đã có nhiều cuộc khỏi nghĩa, nhưng đều kết thúc trong một
        thời gian ngắn. Do đo, nhà Ngô sẽ được lấy làm mốc. Những triều đại cũ
        vẫn có thể được liệt kê, nhưng sẽ là mục cái khác
      </p>
      {/* Tabs trượt ngang */}
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
            ←
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-2 py-2"
            onScroll={checkScrollLimits}
          >
            {dynasties.map((dynasty) => (
              <button
                key={dynasty.id} // Key độc đáo từ id
                onClick={() => setActiveTab(dynasty.name)}
                className={`flex-shrink-0 px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-lg border-2 border-white ${
                  activeTab === dynasty.name
                    ? "bg-amber-500 text-black"
                    : "bg-black/50 text-gray-200"
                } hover:bg-amber-400 active:bg-amber-400 transition-all duration-300`}
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
            →
          </button>
        </div>
      </div>
      {/* Grid tướng */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {dynasties
          .find((d) => d.name === activeTab)
          ?.generals.map((general) => (
            <Link
              key={general.id} // Key độc đáo từ id
              href={`/generals/tuong-quan-viet-nam/bio?general=${toSlug(
                general.name
              )}`}
              className="group rounded-lg"
            >
              <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg overflow-hidden p-2 bg-amber-300 group-hover:bg-amber-500 group-active:bg-amber-500">
                <Image
                  src={general.image}
                  alt={general.name}
                  fill
                  className="object-contain rounded-lg group-hover:scale-102 group-hover:opacity-75 group-active:scale-102 group-active:opacity-75 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1 group-hover:bg-amber-500 group-active:bg-amber-500 group-hover:text-black group-active:text-black transition-all duration-300">
                {general.name}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default VietnameseGenerals;
