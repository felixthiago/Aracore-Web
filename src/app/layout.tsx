import { Toaster } from "sonner"; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Macawdemy",
  description: "Feito com amor selvagem por araras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = {inter.className}>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Toaster richColors position = "top-center"></Toaster>
      </body>
    </html>
  );
}
