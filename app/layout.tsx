import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/_globals.scss";
import Header from "@/components/Header";
import ToastProvider from "@/providers/ToastProvider";
import ScrollToTop from "@/utils/ScrollToTop";
import Footer from "@/components/Footer";
import SectionProvider from "@/providers/SectionProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import ThemeToggleBtn from "@/components/accessories/ThemeToggleBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filip Lukic | Portfolio",
  description: "Filip Lukic, Computer Eng Grad from Carleton",
  authors: { name: "Filip Luki" },
  creator: "Filip Lukic",
  keywords: [
    "Filip Lukic",
    "Engineering Graduate",
    "Computer Engineer",
    "Computer Engineering",
    "Portfolio Website",
    "Carleton Graduate",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ScrollToTop>
          <ThemeProvider>
            <SectionProvider>
              <ToastProvider>
                <Header />
                {children}
                <ThemeToggleBtn />
                <Footer />
              </ToastProvider>
            </SectionProvider>
          </ThemeProvider>
        </ScrollToTop>
      </body>
    </html>
  );
}
