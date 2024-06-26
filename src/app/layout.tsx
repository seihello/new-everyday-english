import Menu from "@/components/menu/menu";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const inter = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <main className="flex min-h-screen flex-col bg-gray-50 py-8 pl-16">
          {children}
        </main>
      </body>
    </html>
  );
}
