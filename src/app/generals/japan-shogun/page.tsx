import React from "react"; //for testing purposes, cannot be removed
import JapaneseGenerals from "@/server-components/generals/JapaneseGenerals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Generals | Chronicles of Valor",
  description: "Explore the greatest generals of each country",
};

const JapanGenerals = () => {
  return (
    <>
      {/* do not remove this fragment. You'll never know when you might need it */}
      <JapaneseGenerals />
    </>
  );
};

export default JapanGenerals;
