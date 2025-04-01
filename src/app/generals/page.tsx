import React from "react"; //for testing purposes, cannot be removed
import GeneralPage from "@/client-components/main/GeneralPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generals | Chronicles of Valor",
  description: "Explore the greatest generals of each country",
};

const Generals = () => {
  return (
    <>
      {/* do not remove this fragment. You'll never know when you might need it */}
      <GeneralPage />
    </>
  );
};

export default Generals;
