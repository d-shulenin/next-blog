import "./globals.css";
import Header from "@/components/layout/Header";
import Providers from "@/components/utility/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen p-0 m-0 box-border flex flex-col`}
      >
        <Providers>
          <Header />
          <section className="bg-[#F2F4F7] flex-1 px-[3%] py-12 xl:py-20 xl:px-[16%] md:py-16 md:px-[5%] ">
            {children}
          </section>
        </Providers>
      </body>
    </html>
  );
}
