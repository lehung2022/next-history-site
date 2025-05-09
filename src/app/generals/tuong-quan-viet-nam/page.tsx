// app/generals/tuong-quan-viet-nam/page.tsx
import { FC } from "react";
import VietnameseGenerals from "@/server-components/generals/VietnameseGenerals";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams; // Await searchParams
  return <VietnameseGenerals searchParams={resolvedSearchParams} />;
};

export default Page;
