import React from "react"; //for testing purposes, cannot be removed
import DynastyPage from "@/client-components/main/DynastyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynasties | Chronicles of Valor",
  description:
    "Explore ancient dynasties",
};

export default function Dynasty() {
  return (
    <>
      <DynastyPage />
    </>
  );
}
