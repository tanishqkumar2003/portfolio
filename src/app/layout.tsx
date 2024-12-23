import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tanishq Kumar | Portfolio",
  authors: [
    { name: "Tanishq Kumar", url: "https://github.com/tanishqkumar2003" },
    { name: "Tanishq ", url: "https://github.com/tanishqkumar2003" },
  ],
  icons: [
    {
      url: "/photo.jpeg",
      href: "/photo.jpeg",
    },
  ],
  description: "Tanishq's personal portfolio website",
  openGraph: {
    title: "Tanishq Kumar| Portfolio",
    description: "Tanishq's personal portfolio website",
    images: [
      {
        url: "/photo",
        alt: "Tanishq Kumar | Portfolio",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-zinc-900", montserrat.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container lg:px-28 pt-24">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
