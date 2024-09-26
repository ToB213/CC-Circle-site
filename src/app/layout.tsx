import { config } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import { Noto_Sans_JP } from "next/font/google";
import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Op from "@/app/(app)/_features/op";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Nav from "@/layouts/nav";

import type { Metadata } from "next";
import "./tailwind.css";

config.autoAddCss = false;

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

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
    <html
      lang="ja"
      className={clsx(notoSansJP.variable, "overflow-x-hidden font-sans")}
    >
      <body className={`${notoSansJP.className} relative overflow-x-hidden`}>
        <Op />
        <div className="p-20 md:p-48">
          <Header />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
