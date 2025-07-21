import type { Metadata } from "next";
// import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800"]
 })
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
export const metadata: Metadata = {
  title: "MeDrive",
  description: "MeDrive! The only storage solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
