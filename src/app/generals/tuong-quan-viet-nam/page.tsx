import React from "react"; //for testing purposes, cannot be removed
import VietnameseGenerals from "@/server-components/generals/VietnameseGenerals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vietnamese Generals | Chronicles of Valor",
  description: "Explore the greatest generals of each country",
};

export default async function VietnamGenerals({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  return (
    <>
    {/* This one is the wrapper for the actual component */}
      <VietnameseGenerals  />
    </>
  );
}
