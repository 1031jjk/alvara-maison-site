import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvaramaison.com"),
  title: {
    default: "Alvara Maison",
    template: "%s | Alvara Maison",
  },
  description:
    "Alvara Maison turns your property into a profitable, worry-free investment with security, maintenance, and guest management handled for you.",
  openGraph: {
    siteName: "Alvara Maison",
    title: "Alvara Maison",
    description:
      "Alvara Maison turns your property into a profitable, worry-free investment with security, maintenance, and guest management handled for you.",
    url: "https://alvaramaison.com",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Alvara Maison",
              url: "https://alvaramaison.com",
              logo: "https://alvaramaison.com/icon.png",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
