import './globals.css'
import {Mulish} from '@next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'


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



      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
