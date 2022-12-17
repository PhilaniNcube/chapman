import Image from "next/image";
import { display } from "../AboutSection";

const HistorySectionOne = () => {
  return (
    <article className="bg-black text-white py-44">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-full flex flex-col justify-center">
            <h2
              className={`${display.className} text-xl md:text-4xl lg:tet-5xl font-bold`}
            >
              Family Business
            </h2>

            <p className="pr-6 lg:pr-10 mt-6 text-sm lg:text-base">
              Established in 1998, The Chapman Hotel & Conference Centre is a
              family business, which is owned and managed by the Franklin
              family. The Chapman Hotel includes the internationally famous
              restaurant, Blackbeards® Tavern, which, besides being known as
              Port Elizabeth&apos;s Seafood Landmark, has been a wine and dine
              destination for the tourism industry since 1975.
            </p>
          </div>
          <Image src="/images/double_room_8.jpg" width={4608} height={2592} alt="Double Room" className="w-full aspect-video object-cover" />
        </div>
      </div>
    </article>
  );
};
export default HistorySectionOne;
