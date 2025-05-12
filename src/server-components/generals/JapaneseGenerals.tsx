import React from "react";
import Link from "next/link";
import Image from "next/image";
//These things will be called from API. It will come as a list of generals

const JapaneseGenerals = () => {
  return (
    // This is for server component, don't mistake it for client component
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals/"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-6 px-4 py-2 rounded-lg mb-4"
      >
        ← Quay về trang tướng quân 
      </Link>
      <div className="px-4">
        <div className="text-2xl md:text-3xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 max-w-2xl text-center">
          <h2>Tướng quân Nhật Bản</h2>
          <div className="my-4 flex justify-center">
            <div className="relative w-full max-w-md aspect-[1/1] border-2 border-white rounded-lg ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/next-js-history.appspot.com/o/nihon-generals%2FOda-Nobunaga.jpeg?alt=media&token=1ce0ec56-e1bf-45a9-ae57-4cedf0ef498f"
                alt="Oda Nobunaga"
                fill
                className="object-contain rounded-lg transition-all duration-300"
                sizes="(max-width: 768px) 100vw, 448px"
                quality={70}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
          <p className="text-lg text-center max-w-5xl mb-6 px-4 py-2">
            Oda Nobunaga (織田信長 - おだのぶなが - Chức-Điền Tín-Trưởng)? 23
            tháng 6 năm 1534 – 21 tháng 6 năm 1582) là một daimyo trong thời kỳ
            Chiến Quốc của lịch sử Nhật Bản. Ông là người có công lớn trong việc
            thống nhất Nhật Bản, chấm dứt thời kỳ chiến loạn kéo dài trên khắp
            cả nước. Những nỗ lực vào việc thống nhất đất nước của ông được tiếp
            nối và hoàn thành bởi hai người thừa kế của ông, đầu tiên là
            Toyotomi Hideyoshi và sau đó là Tokugawa Ieyasu, người đã thống nhất
            đất nước và lập ra chế độ Mạc phủ Tokugawa thống trị Nhật Bản đến
            tận cuộc Minh Trị Duy tân.
            <br />
            Nguồn:{" "}
            <a
              href="https://vi.wikipedia.org/wiki/Oda_Nobunaga"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia - 織田信長
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JapaneseGenerals;
