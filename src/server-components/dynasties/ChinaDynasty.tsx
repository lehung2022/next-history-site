import React from "react";
import Link from "next/link";

const ChinaDynasty = () => {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/dynasties/"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to dynasties
      </Link>
    </div>
  );
};

export default ChinaDynasty;
