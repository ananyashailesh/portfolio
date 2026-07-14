import type { Metadata, Viewport } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ananya Shailesh | Portfolio",
  description:
    "Portfolio of Ananya Shailesh: AI chatbots, drone ground control systems, assistive robotics, and full-stack engineering.",
};

export const viewport: Viewport = {
  themeColor: "#fcbc1d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#212529] text-[#edeeef]">
        {children}
      </body>
    </html>
  );
}
