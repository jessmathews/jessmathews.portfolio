import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "Jess's Portfolio",
  description: "Portfolio of Jess Mathews",
  openGraph:{
    title: "Jess Mathews",
    description: "Portfolio of Jess Mathews",
    type: "website",
    site_name: "Jess Mathews",
    locale: "en_US",
  },
  authors: [{ name: "Jess Mathews" }],
  creator: "Jess Mathews",
  publisher: "Jess Mathews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.className} min-h-screen flex flex-col`}>
        <Header />
        <StairTransition/>
        <PageTransition>
          <div className="grow">
            {children}
          </div>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
