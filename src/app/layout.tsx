import { config } from "@fortawesome/fontawesome-svg-core";
import { Inter } from "next/font/google";
import Op from "@/app/(app)/_features/op";
import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Nav from "@/layouts/nav";

import type { Metadata } from "next";
import "./tailwind.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} relative overflow-x-hidden`}>
        <Op />
        <div className="p-20">
          <Header />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
