import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit"
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ovo"
});

export const metadata = {
  title: "Portfolio - Oz Abohazira",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable} scroll-smooth`}>
      <body className="antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white">{children}</body>
    </html>
  );
}
