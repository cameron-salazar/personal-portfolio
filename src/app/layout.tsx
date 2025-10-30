import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";


export const metadata: Metadata = {
  title: "Cameron Salazar - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cover bg-center bg-[url('/images/light_bg.jpg')] dark:bg-[url('/images/dark_bg.jpg')]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
