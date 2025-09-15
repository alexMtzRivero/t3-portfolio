import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {NextIntlClientProvider} from 'next-intl';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alex - Portfolio",
  description: "Full-stack developer portfolio showcasing projects and experience",
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Alex" }],
  creator: "Alex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alex-portfolio.vercel.app",
    title: "Alex - Portfolio",
    description: "Full-stack developer portfolio showcasing projects and experience",
    siteName: "Alex Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex - Portfolio",
    description: "Full-stack developer portfolio showcasing projects and experience",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
