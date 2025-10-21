import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BarraLateral from "@/components/BarraLateral";

export const metadata: Metadata = {
  title: "Vendas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`flex h-screen w-full`}
      >
        <BarraLateral />
        {children}
      </body>
    </html>
  );
}
