import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import AOSInit from "@/utils/aos";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Restaurant Food",
  description: "This is best restaurant in their town.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"
    >
      <link
  rel="icon"
  href="images/logo-dark.png"
  type="image/<generated>"
  sizes="any"
/>
      <body>
        <AOSInit></AOSInit>
        {children}
      </body>
    </html>
  );
}
