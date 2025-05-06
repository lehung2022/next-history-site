import JapanGeneralBio from "@/server-components/generals-bio/JapanGeneralBio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese General Biography | Chronicles of Valor",
  description: "Biography of a Japanese general from the feudal era",
};

export default function Bio({ params }: { params: { slug: string } }) {
  return (
    // Do not remove these fragments
    <>
      {/* The bio is currently not running, due to me changing the code. Besides, these datas are fake. I have not installed Firebase yet, to avoid messing things up. */}
      {/* I need to set up language switcher and zustand before moving on to firebase */}
      <JapanGeneralBio />
    </>
  );
}
