import Image from "next/image";
import { display } from "../AboutSection";


const RestaurantHistory = () => {
  return (
    <div className="my-20 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/***   ***/}
        <div className="w-full py-10 columns-1 lg:columns-3">
          <p className="text-md lg:text-lg text-slate-700">
            Recognized as Port Elizabeth’s Seafood Landmark and one of the
            finest Seafood specializing A-la-carte Restaurants in the Republic
            of South Africa, BLACKBEARDS® is the oldest established restaurant
            in Port Elizabeth and is situated at The Chapman Hotel & Conference
            Centre.
          </p>
          <p className="text-md lg:text-lg text-slate-700">
            Established by the well-known restauranteur Franklin family in
            September 1975, BLACKBEARDS® Tavern is still owned by the Franklins.
            The restaurant was named after Blackbeard the Pirate, who was born
            in Bristol as Edward Teach. In 1718, he was killed by Lieutenant
            Richard Maynard in a deadly battle.
          </p>
          <p className="text-md lg:text-lg text-slate-700">
            Besides offering guests a unique seafood experience, BLACKBEARDS®
            also offers other extensive a-la-carte options, which include
            various meat, poultry, vegetarian and Italian dishes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="w-full">
            <Image src="/images/benedict.jpg" width={1024} height={682} alt="Benedict" className="w-full aspect-video object-cover" />
          </div>
          <div className="w-full">
            <Image src="/images/croissant_&_berries.jpg" width={1024} height={682} alt="Croissant" className="w-full aspect-video object-cover" />
          </div>
          <div className="w-full">
            <Image src="/images/fillet_steak.jpg" width={1024} height={682} alt="Steak" className="w-full aspect-video object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
};
export default RestaurantHistory;
