import Image from "next/image";
import Link from "next/link";
import { display } from "./AboutSection";

const Restaurant = () => {
  return (
           <div className="my-10 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full flex flex-col items-start justify-center py-16">
                  <h2 className={`${display.className} text-xl md:text-5xl text-black`}>World-class Cuisine</h2>
                  <p className="text-md lg:text-lg font-medium text-slate-700 pr-8 lg:pr-20 mt-5">
                    Dishing up the ginest Seafood &amp; A-la-carte cuisine since 1975, Blackbeard&apos;s Tavern will make you hungry for more.
                  </p>

                  <Link href="/restaurant" className="border border-black text-black text-md lg:text-lg px-4 lg:px-8 py-3 mt-7 uppercase font-medium">Restaurant</Link>
                </div>
                <Image src="/images/benedict.jpg" width={1024} height={684} alt="Benedict" className="w-full aspect-video object-cover"  />
              </div>
           </div>
           ) ;
};
export default Restaurant;
