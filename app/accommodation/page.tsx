import RoomsGrid from "./RoomsGrid";
import RoomsHero from "./RoomsHero";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Chapman Hotel - Luxury Accommodation in Port Elizabeth, South Africa",
  description: "Experience luxury accommodation at The Chapman Hotel in Port Elizabeth, South Africa. Our 23 rooms are beautifully decorated and feature modern amenities such as high-speed Wi-Fi and flat-screen TVs.",
  keywords: "accommodation, hotel, luxury, Port Elizabeth, South Africa",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.chapman.co.za/accommodation"
  },
  openGraph: {
    title: "The Chapman Hotel - Luxury Accommodation",
    description: "Experience luxury accommodation at The Chapman Hotel in Port Elizabeth, South Africa. Our 23 rooms are beautifully decorated and feature modern amenities such as high-speed Wi-Fi and flat-screen TVs.",
    images: ["https://www.chapman.co.za/images/double_room_1.jpg"]
  },
  viewport: "width=device-width, initial-scale=1.0"
}

const page = () => {
  return <main>
    <RoomsHero />
    <RoomsGrid />
  </main>;
};
export default page;
