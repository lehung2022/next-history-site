import React from "react";
import Link from "next/link";
import Image from "next/image";
//These things will be called from API. It will come as a list of generals

const ChineseGenerals = () => {
  return (
    // This is for server component, don't mistake it for client component
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals/"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to generals
      </Link>
      <div className="px-4">
        <div className="text-2xl md:text-3xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 max-w-2xl text-center">
          <h2>Tướng quân Trung Quốc</h2>
          <div className="my-4 flex justify-center">
            <div className="relative w-full max-w-md aspect-[1/1] border-2 border-white rounded-lg ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/next-js-history.appspot.com/o/zung-gwok-generals%2Fsyun-gin.jpeg?alt=media&token=e56a92d8-187f-4f6f-a5bb-a5763aa86204"
                alt="Sun Jian"
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
            Tôn Kiên (155–193), tự Văn Đài, người huyện Phú Xuân, quận Ngô (nay
            là huyện Phú Dương, thành phố Hàng Châu, tỉnh Chiết Giang), là một
            tướng quân và lãnh chúa thời cuối Đông Hán, giữ chức Thái thú Trường
            Sa, người đặt nền móng cho chính quyền Đông Ngô. ...
            <br />
            Nguồn:{" "}
            <a
              href="https://vi.wikipedia.org/wiki/T%C3%B4n_Ki%C3%AAn"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia - Tôn Kiên
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChineseGenerals;
