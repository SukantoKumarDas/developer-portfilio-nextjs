import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Main from "./components/_templates/Main";
import Menu from "./components/_templates/Menu";
import Footer from "./components/_templates/Footer";
import { Toaster } from "@/components/ui/sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukanto Kumar Das",
  description: "This is the portfolio of Sukanto Kumar Das",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Menu></Menu>
        </header>
        <main>
          <Main></Main>
          <Toaster />
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
