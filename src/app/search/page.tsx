// /app/search/page.tsx
import Search from "@/server-components/search/Search";
import { Suspense } from "react";

export const revalidate = 3600; // Cache trang 1 giờ

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <Search searchParams={{ query }} />
    </Suspense>
  );
}
