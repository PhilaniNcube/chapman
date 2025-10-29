import ConferencingHero from "./ConferencingHero";
import ConferencingPackages from "./ConferencingPackages";
import Details from "./Details";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Chapman Hotel - Conferencing Services for Large and Small Groups in Port Elizabeth, South Africa",
  description: "The Chapman Hotel in Port Elizabeth, South Africa offers a range of conferencing services for large and small groups. We are registered on the Central Supplier Database.",
  keywords: "conferencing, hotel, Port Elizabeth, South Africa, Central Supplier Database",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.chapman.co.za/conferencing"
  },
  openGraph: {
    title: "The Chapman Hotel - Conferencing Services",
    description: "The Chapman Hotel in Port Elizabeth, South Africa offers a range of conferencing services for large and small groups. We are registered on the Central Supplier Database.",
    images: ["https://www.chapman.co.za/images/auditorium.jpg"]
  },
  viewport: "width=device-width, initial-scale=1.0"
}

const page = () => {
  return <div>
    <ConferencingHero />
    <ConferencingPackages />
    <Details />
  </div>;
};
export default page;
