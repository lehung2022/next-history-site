import Head from "next/head";
import Image from "next/image";
import Navbar from "@/client-components/main/Navbar";
import Footer from "@/client-components/main/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chronicles of Valor",
  description:
    "Explore historical timelines, famous generals, and significant events in history.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const isDev = process.env.NODE_ENV === "development";
  const baseUrl = isDev ? "http://localhost:3000" : "https://yourdomain.com";

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="robots"
          content={isDev ? "noindex, nofollow" : "index, follow"}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Chronicles of Valor" />
        <meta
          property="og:description"
          content="Explore historical timelines, famous generals, and significant events in history."
        />
        <meta property="og:image" content="/other_images/vietnam-plateau.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:site_name" content="Chronicles of Valor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chronicles of Valor" />
        <meta
          name="twitter:description"
          content="Explore historical timelines, famous generals, and significant events in history."
        />
        <meta
          name="twitter:image"
          content="/other_images/vietnam-plateau.jpg"
        />
      </Head>
      <body className="font-sans antialiased min-h-screen flex flex-col relative">
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/other_images/vietnam-plateau.jpg"
            alt="Background"
            fill
            sizes="100vw"
            className="object-contain"
            loading="lazy"
            fetchPriority="low"
          />
        </div>
        <Navbar />
        <main className="flex-grow mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
