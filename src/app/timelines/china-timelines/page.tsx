import React from "react";
import ChinaTimelines from "@/server-components/timelines/ChinaTimelines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "China Timelines | Chronicles of Valor",
  description:
    "Explore historical timelines, famous generals, and significant events in history.",
};

const China = () => {
  return (
    <>
      <ChinaTimelines />
    </>
  );
};

export default China;
