import Link from "next/link";

const VietGeneralBio = () => {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals/tuong-quan-viet-nam"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-6 px-4 py-2 rounded-lg mb-4"
      >
        ← Quay về trang tướng quân 
      </Link>
    </div>
  );
};

export default VietGeneralBio;
