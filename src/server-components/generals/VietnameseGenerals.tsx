import React from "react";
import Link from "next/link";

// Dữ liệu giả
const vietGenerals = [
  { name: "Đinh Bộ Lĩnh", image: "/vietnamese_generals/dinh_bo_linh.jpg" },
  { name: "Đinh Lễ", image: "/vietnamese_generals/dinh_le.jpg" },
  { name: "Đinh Liễn", image: "/vietnamese_generals/dinh_lien.jpg" },
  { name: "Dương Tam Kha", image: "/vietnamese_generals/duong_tam_kha.jpg" },
  {
    name: "Lý Thường Kiệt",
    image: "/vietnamese_generals/ly_thuong_kiet_02.jpg",
  },
  { name: "Nguyễn Ánh", image: "/vietnamese_generals/nguyen_anh_02.png" },
];

// Hàm tạo slug từ tên tướng
const toSlug = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const VietnameseGenerals = () => {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals"
        className="text-gray-950 mt-4 bg-white hover:bg-amber-500 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to Generals
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold my-8 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
        Vietnamese Generals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {vietGenerals.map((general) => (
          <Link
            key={general.name}
            href={`/generals/tuong-quan-viet-nam/bio?general=${toSlug(
              general.name
            )}`}
            className="group"
          >
            <div className="relative w-full h-48 border-2 border-white group-hover:border-4 group-hover:border-amber-400 rounded-lg bg-amber-300">
              <img
                src={general.image}
                alt={general.name}
                className="w-full h-full object-contain rounded-lg group-hover:scale-105 group-hover:opacity-75 transition-all duration-300"
              />
            </div>
            <p className="mt-2 text-xl text-center border-2 border-white group-hover:border-amber-400 bg-black/50 rounded-md px-2 py-1">
              {general.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VietnameseGenerals;
