import { type FC, type PropsWithChildren } from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from "tailwind-merge";
import './globals.css'
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { flowbiteTheme } from "./theme";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vipas - The Logistics Friend',
  description: 'Vipas is a logistics management solution for people who are involved in logistics business',
}



const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={twMerge("bg-gray-50 dark:bg-gray-900", inter.className)}>
        <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;