import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
  title: "Car Share",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
