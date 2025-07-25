import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kate Art Gallery - Professional Pencil & Charcoal Artist",
  description:
    "Discover exquisite pencil and charcoal artworks by Kate. Commission custom portraits, landscapes, and illustrations crafted with passion and precision. Professional art services worldwide.",
  keywords:
    "pencil art, charcoal drawings, custom portraits, commissioned artwork, professional artist, Kate Art Gallery, monochrome art, fine art",
  authors: [{ name: "Kate Art Gallery" }],
  creator: "Kate",
  openGraph: {
    title: "Kate Art Gallery - Professional Pencil & Charcoal Artist",
    description:
      "Exquisite pencil and charcoal artworks crafted with passion and precision",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
