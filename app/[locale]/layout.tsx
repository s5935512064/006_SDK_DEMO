import type { Metadata } from "next";
import { helenehess, jost } from "@utils/font";
import { AOSInit } from "@/components/aos";
import Script from "next/script";
import { Viewport } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Inquiries from "@/components/Inquiries";
import Transition from "@/components/Transition";

import "../globals.css";
import "../cookieconsent.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_API_URL)),
  title: "The Residences at Sindhorn Kempinski Hotel",
  description:
    "The Residences at Sindhorn Kempinski Hotel redefines luxury living with unparalleled elegance and sophistication.",
  keywords: [
    "Sindhorn Kempinski Residences",
    "SDK Bangkok",
    "The Residences at Sindhorn Kempinski",
    "Sindhorn Kempinski Bangkok",
    "Sindhorn Kempinski hotel Bangkok",
    "Luxury residences Bangkok",
    "SDK luxury apartments",
    "Sindhorn Kempinski condominiums",
    "Luxury living Bangkok",
    "Sindhorn Kempinski price",
    "Sindhorn Kempinski for sale",
    "Luxury condos Bangkok",
    "Sindhorn Kempinski amenities",
    "Sindhorn Kempinski floor plans",
    "Sindhorn Kempinski developer",
    "Luxury apartments in Bangkok",
    "Sindhorn Kempinski penthouses",
    "Sindhorn Kempinski location",
    "Sindhorn Kempinski facilities",
    "SDK urban retreat Bangkok",
    "ซินด์ฮอร์น เค็มปินสกี รีซิเดนซ์",
    "SDK กรุงเทพ",
    "บ้านพักที่ สินธร เค็มปินสกีนส์",
    "สินธร เค็มปินสกี กรุงเทพ",
    "โรงแรม สินธร เค็มปินสกี กรุงเทพ",
    "คอนโดหรู กรุงเทพ",
    "อพาร์ทเม้นท์หรู สินธร เค็มปินสกีนส์",
    "คอนโดมิเนียม สินธร เค็มปินสกีนส์",
    "การดำเนินชีวิตหรูในกรุงเทพ",
    "ราคา สินธร เค็มปินสกีนส์",
    "สำหรับขาย สินธร เค็มปินสกีนส์",
    "คอนโดหรู กรุงเทพ",
    "สิ่งอำนวยความสะดวก สินธร เค็มปินสกีนส์",
    "แบบผังชั้น สินธร เค็มปินสกีนส์",
    "นักพัฒนา สินธร เค็มปินสกีนส์",
    "อพาร์ทเม้นท์หรูในกรุงเทพ",
    "เพนท์เฮาส์ สินธร เค็มปินสกีนส์",
    "สถานที่ตั้ง สินธร เค็มปินสกีนส์",
    "สิ่งอำนวยความสะดวก สินธร เค็มปินสกีนส์",
    "รีสอร์ทในเมือง สินธร เค็มปินสกีนส์",
    "Luxury residences Bangkok",
    "Luxury homes in Bangkok",
    "Bangkok luxury properties",
    "Luxury condos Bangkok",
    "Luxury apartments Bangkok",
    "Exclusive residences Bangkok",
    "Upscale living Bangkok",
    "Luxury real estate Bangkok",
    "Luxury living Bangkok",
    "High-end residences Bangkok",
    "บ้านพักหรู กรุงเทพ",
    "บ้านหรูในกรุงเทพ",
    "คุณสมบัติหรูในกรุงเทพ",
    "คอนโดหรูในกรุงเทพ",
    "อพาร์ทเม้นท์หรูในกรุงเทพ",
    "บ้านพักเอกชนหรูในกรุงเทพ",
    "การดำเนินชีวิตหรูในกรุงเทพ",
    "อสังหาริมทรัพย์หรูในกรุงเทพ",
    "การดำเนินชีวิตระดับหรูในกรุงเทพ",
    "บ้านพักระดับพรีเมียมในกรุงเทพ",
  ],
  authors: [{ name: "Siam Sindhorn Co.,Ltd." }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "The Residences at Sindhorn Kempinski Hotel",
    description:
      "The Residences at Sindhorn Kempinski Hotel redefines luxury living with unparalleled elegance and sophistication.",
    url: "https://theresidencesatsindhornkempinski.com",
    // images: "/DSCF9186.png",
    siteName: "The Residences at Sindhorn Kempinski Hotel",
    locale: "th_TH",
    type: "website",
  },
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: Props) {
  // const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html
      lang={params.locale}
      className={`${helenehess.variable} ${jost.variable}`}
    >
      {/* <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');

        `,
        }}
      ></Script> */}

      {/* <meta
        name="google-site-verification"
        content="2CBldAGXeSZtd1b-oxXr3coHJF-SDM1D0KeZ12w4fJw"
      /> */}
      <Transition>
        <Navbar />
        {/* <Inquiries /> */}
        {children}
        <Footer />
      </Transition>
    </html>
  );
}
