import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--lato",
});

export const metadata: Metadata = {
  title: "Notego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          lato.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
