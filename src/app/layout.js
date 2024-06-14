import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Reduxtoolkit_Provider from "@/Store/Reduxtoolkit_Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Add To Cart",
  description: "Created a add to cart functionality using next.js framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Reduxtoolkit_Provider>
          <main className="max-w-[1440px] m-auto">
            <Header />
            {children}
          </main>
          <Toaster />
        </Reduxtoolkit_Provider>
      </body>
    </html>
  );
}
