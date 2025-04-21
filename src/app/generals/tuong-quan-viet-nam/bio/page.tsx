import VietGeneralBio from "@/server-components/generals-bio/VietGeneralBio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vietnamese General Biography | Chronicles of Valor",
  description: "Biography of a Vietnamese general from the feudal era",
};

export default async function Bio({ params }: { params: { slug: string } }) {
  return (
    // Do not remove these fragments
    <>
      <VietGeneralBio params={params} />
    </>
  );
}
