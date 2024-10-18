"use client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FaqHeader from "@/components/common/FaqHeader";
import FaqFooter from "@/components/common/FaqFooter";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/register";
  const isCustomerStoriesPage = pathname === '/customer-stories';
  const isRedirectPage = pathname === '/redirect';

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token && isAuthPage) {
      router.push("/");
    }
  }, [pathname, isAuthPage, router]);

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
          <ToastContainer />
        </body>
      </html>
    );
  }

  if (isFaqPage === null) {
    return (
      <html lang="en">
        <body className={`${soleil.variable} antialiased`}>
          <div className="pb-36">{children}</div>
          <ToastContainer />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${soleil.variable} antialiased`}>
        {isFaqPage ? <FaqHeader /> : <Header />}
        <div className={`bg-[#fcfcfd] ${!isCustomerStoriesPage ? 'pb-40' : ''}`}>
          {children}
        </div>
        <ToastContainer />
        {isFaqPage ? <FaqFooter /> : <Footer />}
      </body>
    </html>
  );
}
