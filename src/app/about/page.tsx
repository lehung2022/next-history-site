import React from "react"; //for testing purposes, cannot be removed
import AboutPage from "@/client-components/main/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Chronicles of Valor",
  description:
    "Learn about the Chronicles of Valor project, its purpose, sources, and languages used.",
};

export default function About() {
  return (
    <>
      <AboutPage />
    </>
  );
}
