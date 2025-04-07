import Search from "@/server-components/search/Search";
import { Suspense } from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams; // Await searchParams trước khi dùng
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search query={query} />
    </Suspense>
  );
}
