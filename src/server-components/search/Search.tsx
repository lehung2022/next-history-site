import Link from "next/link";

async function fetchSearchResults(query: string) {
  const results = [
    { href: "/generals/tuong-quan-viet-nam", label: "Trần Hưng Đạo" },
    { href: "/dynasties/trieu-dai-viet-nam", label: "Nhà Trần" },
    { href: "/timelines/vietnam-timelines", label: "Thời Trần" },
  ];
  const match = results.find((r) =>
    r.label.toLowerCase().includes(query.toLowerCase())
  );
  return match || null;
}

export default async function Search({ query }: { query?: string }) {
  if (!query) {
    return <div>Enter a search term...</div>;
  }

  const result = await fetchSearchResults(query);
  const searchText = `Result for "${query}"`;
  const noResultText = `No results found for "${query}"`;

  if (result) {
    return (
      <div>
        <h2>{searchText}</h2>
        <p>
          Found: <Link href={result.href}>{result.label}</Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center text-gray-200">
        <div className="p-6 text-center">
          <h2 className="mb-4">{noResultText}</h2>
          <Link
            href="/"
            className="text-white bg-transparent border border-gray-300 hover:bg-blue-700 active:bg-blue-700 mt-4 px-4 py-2 rounded-lg mb-4 hover:scale-105 active:scale-105 transition-all duration-300"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }
}
