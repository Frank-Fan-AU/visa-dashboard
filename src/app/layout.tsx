import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { I18nProvider } from "@/context/i18n-context";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/common/Footer";
import { Analytics } from '@vercel/analytics/next';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const title = "Visa-dashboard";
const description = "澳洲500学签信息收集表格";
const keywords = "visa dashboard, 澳洲500PHD等签, 澳洲签证信息收集, 澳洲签证申请, 澳洲签证攻略, 澳洲签证指南, 澳洲签证流程, 澳洲签证费用, 澳洲签证材料, 澳洲签证时间, 澳洲签证政策, 澳洲签证要求, 澳洲签证流程, 澳洲签证费用, 澳洲签证材料, 澳洲签证时间, 澳洲签证政策, 澳洲签证要求";
const image = "/seoImg.png";

export const metadata: Metadata = {
  title,
  description,
  keywords,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph:{
    type: "website",
    title,
    description,
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  icons: {
    icon: "/images/image.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SMCJYMH0HP"
          ></Script> */}
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());

              gtag('config', 'G-SMCJYMH0HP');
            `}
          </Script>
        </head>
        <I18nProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased max-w-screen-2xl mx-auto flex flex-col",
            fontSans.variable
          )}
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Analytics />
        </body>
        </I18nProvider>
      </html>
    </ClerkProvider>
  );
}
