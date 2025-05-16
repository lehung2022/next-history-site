import Image from "next/image";
import Navbar from "@/client-components/main/Navbar";
import Footer from "@/client-components/main/Footer";
import Head from "next/head";
import ErrorBoundary from "@/client-components/main/ErrorBoundary";
import AudioPlayer from "@/client-components/sub/AudioPlayer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chronicles of Valor",
  description:
    "Explore historical timelines, famous generals, and significant events in history.",
  robots:
    process.env.NODE_ENV === "development"
      ? "noindex, nofollow"
      : "index, follow",
  icons: "/favicon.ico",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://yourdomain.com"
  ),
  openGraph: {
    title: "Chronicles of Valor",
    description:
      "Explore historical timelines, famous generals, and significant events in history.",
    images: ["/other_images/vietnam-plateau.jpg"],
    type: "website",
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://yourdomain.com",
    siteName: "Chronicles of Valor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronicles of Valor",
    description:
      "Explore historical timelines, famous generals, and significant events in history.",
    images: ["/other_images/vietnam-plateau.jpg"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans antialiased h-full min-h-screen flex flex-col relative">
        <div className="fixed inset-0 z-[-1] bg-black/35">
          <Image
            src="/other_images/vietnam-plateau.jpg"
            alt="Background"
            fill
            sizes="100vw"
            className="object-contain"
            priority={true}
            quality={70}
          />
        </div>
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        <main className="flex-grow mt-16 pb-8">{children}</main>
        <div className="mx-auto my-4">
          <AudioPlayer />
        </div>
        <Footer />
      </body>
    </html>
  );
}
