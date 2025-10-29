import './globals.css'
import {Mulish} from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
import Script from "next/script"
import { Metadata } from 'next'


const mulish = Mulish({
  display: "swap",
  weight: ["400", "500", "700", "900"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "The Chapman Hotel - Luxury Accommodation in Port Elizabeth, South Africa",
  description: "Experience luxury accommodation at The Chapman Hotel in Port Elizabeth, South Africa. Our 23 rooms are beautifully decorated and feature modern amenities such as high-speed Wi-Fi and flat-screen TVs.",
  keywords: "hotel, accommodation, luxury, Port Elizabeth, South Africa",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.chapman.co.za/"
  },
  openGraph: {
    title: "The Chapman Hotel & Conference Center",
    description: "Experience luxury accommodation at The Chapman Hotel in Port Elizabeth, South Africa. Our 23 rooms are beautifully decorated and feature modern amenities such as high-speed Wi-Fi.",
    images: ["https://www.chapman.co.za/images/aerial_1.jpg"]
  },
  viewport: "width=device-width, initial-scale=1.0"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mulish.className}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZT44NK59M4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZT44NK59M4');
        `}
      </Script>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
