import React from "react"; //for testing purposes, cannot be removed
import ChineseGenerals from "@/server-components/generals/ChineseGenerals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chinese Generals | Chronicles of Valor",
  description: "Explore the greatest generals of each country",
};

const ZungGwokGenerals = () => {
  return (
    <>
      {/* do not remove this fragment. You'll never know when you might need it */}
      <ChineseGenerals />
    </>
  );
};

export default ZungGwokGenerals;
