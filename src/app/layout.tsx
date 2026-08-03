import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insigio Studio | High-End Cinematic Wedding Film Editing",
  description:
    "Premium wedding film editing studio crafting cinematic stories for luxury wedding videographers. Expert color grading, sound design, and storytelling.",
  keywords: [
    "wedding film editing",
    "cinematic wedding films",
    "luxury wedding videographer",
    "wedding film editor",
    "premium wedding videos",
  ],
  openGraph: {
    title: "Insigio Studio | High-End Cinematic Wedding Film Editing",
    description:
      "Premium wedding film editing tailored for luxury storytellers.",
    type: "website",
    siteName: "Insigio Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-charcoal-950 text-ivory-100 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
