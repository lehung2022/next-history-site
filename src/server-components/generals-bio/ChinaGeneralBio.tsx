import Link from "next/link";
const ChinaGeneralBio = () => {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals/zung-gwok-zeong-gwan"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to Zung Gwok Zeong Gwan  
      </Link>
    </div>
  );
};

export default ChinaGeneralBio;
