import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ProvidersWrapper from "@/components/ProvidersWrapper";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "LinkApp Development",
    description: "дванил дваширов самый ебейший порномист на свете",
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
                    <div className={"text-white bg-[#111] min-h-screen"}>
                        {children}
                    </div>
                </ProvidersWrapper>
            </body>
        </html>
    );
}
