import React from "react";
import VietGeneralBio from "@/server-components/generals-bio/VietGeneralBio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Bio | Vietnamese Generals",
  description: "Biography of a Vietnamese general",
};

// Sửa kiểu của searchParams thành Promise
const Bio = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  return (
    <>
      <VietGeneralBio searchParams={searchParams} />
    </>
  );
};

export default Bio;
