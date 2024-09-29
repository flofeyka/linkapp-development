import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProvidersWrapper from "@/components/ProvidersWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkApp Development - Веб-разработка веб-приложений любой сложности в кратчайшие сроки",
  description:
    "Компания LinkApp Development предлагает профессиональную веб-разработку веб-приложений любой сложности в самые короткие сроки. Узнайте больше о наших услугах и команде экспертов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersWrapper>
          <div className={"text-white bg-[#111] min-h-screen pb-10"}>
            {children}
          </div>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
