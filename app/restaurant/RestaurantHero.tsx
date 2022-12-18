import Image from "next/image";
import { display } from "../AboutSection";

const RestaurantHero = () => {
  return (
    <header className="h-screen relative isolate">
      <Image
        src="/images/restaurant.jpg"
        width={2000}
        height={1333}
        alt="Restaurant"
        className="w-full h-full aspect-video object-cover"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <div className="w-1/2 mx-auto bg-white py-10 text-center text-black">
          <h1 className={`${display.className} text-2xl lg:text-4xl font-bold`}>
            BLACKBEARDS®
          </h1>
        </div>
      </div>
    </header>
  );
};
export default RestaurantHero;
