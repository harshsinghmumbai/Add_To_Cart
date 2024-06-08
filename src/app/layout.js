import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Add To Cart",
  description: "Created a add to cart functionality using next.js framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[1440px] m-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
