import localFont from "next/font/local";
import { Jost } from "next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
});

export const helenehess = localFont({
  src: [
    {
      path: "../public/fonts/helenehess-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helenehess",
  display: "swap",
});
