import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Reduxtoolkit_Provider from "@/Store/Reduxtoolkit_Provider";
import { ThemeProvider } from "@/components/Theme_Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Add To Cart Functionality",
  description: "Created a add to cart functionality using next.js framework",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Reduxtoolkit_Provider>
            <main className="max-w-[1440px] m-auto">
              <Header />
              {children}
            </main>
            <Toaster />
          </Reduxtoolkit_Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
