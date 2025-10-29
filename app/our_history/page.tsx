import AboutPortElizabeth from "./AboutPortElizabeth";
import HistoryHero from "./HistoryHero";
import HistorySectionOne from "./HistorySectionOne";
import Location from "./Location";
import SeaViews from "./SeaViews";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Chapman Hotel - A Rich History in Port Elizabeth, South Africa",
  description: "Established in 1998, The Chapman Hotel & Conference Centre is a family business, which is owned and managed by the Franklin family. The Chapman Hotel includes the internationally famous restaurant, Blackbeards® Tavern, which, besides being known as Port Elizabeth's Seafood Landmark, has been a wine and dine destination for the tourism industry since 1975.",
  keywords: "hotel, history, luxury, Port Elizabeth, South Africa",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.chapman.co.za/our_history"
  },
  openGraph: {
    title: "The Chapman Hotel - A Rich History",
    description: "Established in 1998, The Chapman Hotel & Conference Centre is a family business, which is owned and managed by the Franklin family. The Chapman Hotel includes the internationally famous restaurant, Blackbeards® Tavern, which, besides being known as Port Elizabeth's Seafood Landmark, has been a wine and dine destination for the tourism industry since 1975.",
    images: ["https://www.chapman.co.za/images/aerial_2.jpg"]
  },
  viewport: "width=device-width, initial-scale=1.0"
}

const page = () => {
  return <main>
    <HistoryHero />
    <HistorySectionOne />
    <Location />
    <SeaViews />
    <AboutPortElizabeth />
  </main>;
};
export default page;
