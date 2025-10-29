import RestaurantHistory from "./RestaurantHistory";
import RestaurantHero from "./RestaurantHero";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blackbeard's Restaurant at The Chapman Hotel - Delicious Dining in Port Elizabeth, South Africa",
  description: "Experience delicious dining at Blackbeard's Restaurant at The Chapman Hotel in Port Elizabeth, South Africa. Our menu features a variety of dishes including eggs benedict, steaks, seafood, and pizzas.",
  keywords: "restaurant, dining, hotel, Port Elizabeth, South Africa",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.chapman.co.za/restaurant"
  },
  openGraph: {
    title: "Blackbeard's Restaurant at The Chapman Hotel",
    description: "Experience delicious dining at Blackbeard's Restaurant at The Chapman Hotel in Port Elizabeth, South Africa. Our menu features a variety of dishes including eggs benedict, steaks, seafood, and pizzas.",
    images: ["https://www.chapman.co.za/images/benedict.jpg"]
  },
  viewport: "width=device-width, initial-scale=1.0"
}

const page = () => {
  return (
    <main>

    </main>
  );
};
export default page;
