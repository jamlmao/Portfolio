import type { Metadata } from "next";
import {Finlandica } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Data } from "@/data/data";
import { cn } from "@/lib/utils";

const finlandica = Finlandica({
  variable: "--font-finlandica",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Kodeejam",
  description: "Portfolio of JamLmao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${finlandica.variable} antialiased`}
      >
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              {children}
            </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
