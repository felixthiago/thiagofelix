import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { LenisScroll } from "@/components/engine/LenisScroll";

import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "felix ~ developer",
  description: "dev's portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <motion.div className = "pointer-events-none fixed inset-0 z-0" style = {{background: bgLight}}/> */}
        <LenisScroll>
          {children}
        </LenisScroll>
      </body>
    </html> 
  );
}
