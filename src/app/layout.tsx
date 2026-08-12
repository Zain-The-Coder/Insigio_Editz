import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
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
  title: "Insigio Editz | High-End Cinematic Editing Studio",
  description:
    "Premium video editing studio crafting cinematic content for weddings, fitness brands, vlogs, and short-form creator videos. Expert color grading, sound design, and storytelling.",
  keywords: [
    "video editing studio",
    "cinematic wedding films",
    "fitness video editing",
    "vlog editing",
    "short-form video editing",
    "content creator editing",
    "premium video production",
  ],
  openGraph: {
    title: "Insigio Editz | High-End Cinematic Editing Studio",
    description:
      "Premium video editing for weddings, fitness, vlogs, and short-form content.",
    type: "website",
    siteName: "Insigio Editz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-charcoal-950 text-slate-100 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
