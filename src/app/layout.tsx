import Image from "next/image";
import Navbar from "@/client-components/main/Navbar";
import Footer from "@/client-components/main/Footer";
import ErrorBoundary from "@/client-components/main/ErrorBoundary";
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
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col relative">
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
        <main className="flex-grow mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
