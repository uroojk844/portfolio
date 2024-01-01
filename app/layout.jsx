import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urooj's portfolio",
  description: "Create next app",
  author: "Urooj Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="home"
        className={`${inter.className} text-zinc-950 dark:text-zinc-200 dark:bg-zinc-950`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
