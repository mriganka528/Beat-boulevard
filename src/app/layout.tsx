import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Beat Boulevard: Navigate Your Musical Pathway",
  description: "Embark on a musical adventure down Beat Boulevard and discover the skills and knowledge you need to thrive as a musician",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <>
      <html lang="en" className="dark">
        <body className={inter.className} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </>

  );
}
