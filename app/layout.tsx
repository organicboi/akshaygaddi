import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', // Better performance
});

export const metadata: Metadata = {
  title: "Akshay Gaddi | Senior Full-Stack Developer | React & Node.js Expert",
  description: "Experienced Full-Stack Developer with 3+ years building scalable web applications. Specialized in React, TypeScript, Node.js, and cloud technologies. Available for remote opportunities.",
  keywords: [
    "full-stack developer", 
    "react developer", 
    "node.js developer", 
    "typescript", 
    "javascript", 
    "web development", 
    "software engineer", 
    "remote developer",
    "frontend developer",
    "backend developer",
    "akshay gaddi"
  ],
  authors: [{ name: "Akshay Gaddi" }],
  creator: "Akshay Gaddi",
  publisher: "Akshay Gaddi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Akshay Gaddi - Full-Stack Developer",
    description: "Building scalable web applications with modern technologies. React, Node.js, TypeScript expert available for remote opportunities.",
    siteName: "Akshay Gaddi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Gaddi - Full-Stack Developer",
    description: "Building scalable web applications with modern technologies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
