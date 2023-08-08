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
          <Header />
          <div className="m-auto lg:max-w-screen-xl p-8">{children}</div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
