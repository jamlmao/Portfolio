import type { Metadata } from "next";
import {Finlandica } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${finlandica.variable} antialiased`}
        suppressHydrationWarning
      >
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              {children}
              <Toaster position="top-right" richColors />
            </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}