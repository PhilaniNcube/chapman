import './globals.css'
import {Mulish} from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
import Script from "next/script";


const mulish = Mulish({
  display: "swap",
  weight: ["400", "500", "700", "900"],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mulish.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
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
