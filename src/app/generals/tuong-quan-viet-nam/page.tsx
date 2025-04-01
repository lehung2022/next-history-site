import React from "react"; //for testing purposes, cannot be removed
import VietnameseGenerals from "@/server-components/generals/VietnameseGenerals"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vietnamese Generals | Chronicles of Valor",
  description: "Explore the greatest generals of each country",
};

const VietnamGenerals = () => {
  return (
    <>
      {/* do not remove this fragment. You'll never know when you might need it */}
      <VietnameseGenerals />
    </>
  );
};

export default VietnamGenerals;
