// Alternative font configuration if you want to self-host Geist fonts
// You would need to download the font files and place them in public/fonts/

import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeistVF.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: [
    {
      path: "../../public/fonts/GeistMonoVF.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});
