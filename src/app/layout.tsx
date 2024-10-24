"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FaqHeader from "@/components/common/FaqHeader";
import FaqFooter from "@/components/common/FaqFooter";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";

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
  const [isFaqPage, setIsFaqPage] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isAuthPage =
    pathname === "/auth/login" || pathname === "/auth/register";
  const isCustomerStoriesPage = pathname === "/customer-stories";
  const isRedirectPage = pathname === "/redirect";

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token && isAuthPage) {
      router.push("/");
    }
  }, [isAuthPage, router]);

  useEffect(() => {
    if (pathname === "/faq" || pathname.startsWith("/articles/")) {
      setIsFaqPage(true);
    } else {
      setIsFaqPage(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5XVWCWWH');
            `,
          }}
        />
      </head>
      
      <body className={`${soleil.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XVWCWWH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {!isAuthPage && (isFaqPage ? <FaqHeader /> : <Header />)}

        <div
          className={`flex flex-col min-h-screen ${
            !isCustomerStoriesPage && !isRedirectPage ? "bg-[#fcfcfd]" : ""
          }`}
        >
          <div
            className={`flex-grow ${
              !isCustomerStoriesPage && !isRedirectPage ? "pb-40" : ""
            }`}
          >
            {children}
          </div>
          <ToastContainer />
        </div>

        {!isAuthPage && (isFaqPage ? <FaqFooter /> : <Footer />)}

        <ToastContainer />
      </body>
    </html>
  );
}
