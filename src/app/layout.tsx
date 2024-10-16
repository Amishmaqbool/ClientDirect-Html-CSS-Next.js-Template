"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FaqHeader from "@/components/common/FaqHeader";
import FaqFooter from "@/components/common/FaqFooter";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const soleil = localFont({
  src: [
    {
      path: "../assets/fonts/SoleilBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/SoleilBook.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SoleilLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/SoleilRegular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-soleil",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFaqPage, setIsFaqPage] = useState<boolean | null>(null);
  const pathname = usePathname();
  const isAuthPage =  pathname === "/auth/login" || pathname === "/auth/signup";
  const isCustomerStoriesPage = pathname === '/customer-stories';

  useEffect(() => {
    if (pathname === "/faq" || pathname.startsWith("/articles/")) {
      setIsFaqPage(true);
    } else {
      setIsFaqPage(false);
    }
  }, [pathname]);

  if (isAuthPage) {
    return (
      <html lang="en">
        <body className={`${soleil.variable} antialiased`}>
          <div>{children}</div>
        </body>
      </html>
    );
  }

  if (isFaqPage === null) {
    return (
      <html lang="en">
        <body className={`${soleil.variable} antialiased`}>
          <div className="pb-36">{children}</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${soleil.variable} antialiased`}>
        {isFaqPage ? <FaqHeader /> : <Header />}
        <div className={`pb-20 bg-[#fcfcfd] ${!isCustomerStoriesPage ? 'sm:pb-40' : ''}`}>
          {children}
        </div>
        {isFaqPage ? <FaqFooter /> : <Footer />}
      </body>
    </html>
  );

}
