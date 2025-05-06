import Link from "next/link";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

// Hàm tính danh sách trang để hiển thị (VD: 1 ... 6 ... 12)
const getPageRange = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const range: (number | string)[] = [];

  // Trường hợp ít trang
  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Thêm trang 1
  range.push(1);

  // Thêm ... và trang hiện tại
  if (currentPage > 2) {
    range.push("...");
  }
  if (currentPage !== 1 && currentPage !== totalPages) {
    range.push(currentPage);
  }
  if (currentPage < totalPages - 1) {
    range.push("...");
  }

  // Thêm trang cuối
  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
};

function VietnameseGenerals() {
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
          <h2>Tướng quân Việt Nam</h2>
          <div className="my-4 flex justify-center">
            <div className="relative w-full max-w-md aspect-[1/1] border-2 border-white rounded-lg ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/next-js-history.appspot.com/o/vietnam-generals%2Fngo-quyen.PNG?alt=media&token=33530dfc-21ab-473f-84db-d893aaa1763b"
                alt="Ngô Quyền"
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
            Ngô Quyền (chữ Hán: 吳權; 17 tháng 4 năm 898 – 14 tháng 2 năm 944),
            còn được biết đến với tên gọi Tiền Ngô Vương (前吳王) là vị vua đầu
            tiên của nhà Ngô trong lịch sử Việt Nam. Năm 938, ông là người lãnh
            đạo nhân dân đánh bại quân Nam Hán trong trận Bạch Đằng, chính thức
            kết thúc gần một ngàn năm Bắc thuộc, mở ra một thời kì độc lập lâu
            dài của Việt Nam. Sau chiến thắng này, ông lên ngôi vua, lập ra nhà
            Ngô, trị vì từ năm 939 đến năm 944.
            <br />
            Nguồn:{" "}
            <a
              href="https://vi.wikipedia.org/wiki/Ng%C3%B4_Quy%E1%BB%81n"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia - 吳權
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VietnameseGenerals;
