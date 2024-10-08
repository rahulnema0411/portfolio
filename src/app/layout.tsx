import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const calistoga = localFont({
  src: [
    {
      path: "./fonts/calistoga/Calistoga-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-calistoga",
});

const montserrat = localFont({
  src: [
    {
      path: "./fonts/montserrat/Montserrat-Black.ttf",
      weight: "900",
    },
    {
      path: "./fonts/montserrat/Montserrat-Bold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/montserrat/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/montserrat/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/montserrat/Montserrat-Light.ttf",
      weight: "300"
    },
    {
      path: "./fonts/montserrat/Montserrat-ExtraLight.ttf",
      weight: "200"
    },
    {
      path: "./fonts/montserrat/Montserrat-Thin.ttf",
      weight: "100"
    }
  ],
  variable: "--font-montserrat",
});



export const metadata: Metadata = {
  title: "rahul nema",
  description: "my dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${calistoga.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
