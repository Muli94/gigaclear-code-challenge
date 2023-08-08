import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/src/components/molecules/header/Header";
import ReactQueryClientProvider from "@/src/components/providers/ReactQueryClientProvider";
import { cn } from "@/src/lib/utils";
import "@/src/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gigaclear",
  description: "App to display posts",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={cn("bg-white", inter.className)}>
        <ReactQueryClientProvider>
          <div className="fixed -z-10 top-0 left-0 right-0 h-[835px] bg-[url('../../public/bg.svg')] bg-top bg-cover bg-no-repeat" />
          <Header />
          <div className="m-auto lg:max-w-screen-xl p-8">{children}</div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
