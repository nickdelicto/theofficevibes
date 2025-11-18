import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Office Vibes - Support Relatable Office Humor",
  description: "Support The Office Vibes and keep the laughs coming. Your favorite office humor shorts, powered by viewers like you. Over 1M+ monthly views of relatable workplace content.",
  keywords: ["office humor", "work memes", "office shorts", "workplace comedy", "relatable office"],
  authors: [{ name: "The Office Vibes" }],
  openGraph: {
    title: "The Office Vibes - Support Relatable Office Humor",
    description: "If I've made your workday slightly less painful, consider supporting! ☕",
    url: "https://theofficevibes.com",
    siteName: "The Office Vibes",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Office Vibes - Relatable Office Humor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Office Vibes - Support Relatable Office Humor",
    description: "If I've made your workday slightly less painful, consider supporting! ☕",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}

