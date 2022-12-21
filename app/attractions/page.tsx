
import Image from "next/image";
import React, { Fragment, ReactNode } from "react";
import { XataClient } from "../../utils/xata";
import { display } from "../AboutSection";
import AttractionsGrid from "./AttractionsGrid";


const xata = new XataClient();

const loadData = async () => {
  const attractions = await xata.db.attractions.getMany();

  return attractions;
};


const page = async () => {

    const attractions = await loadData();

  return (
    <Fragment>
      <header className="min-h-[60vh] pt-40 flex flex-col items-center justify-center text-center">
        <h1
          className={`${display.className} text-black text-2xl lg:text-5xl font-bold`}
        >
          Attractions
        </h1>
        <p className="text-slate-700 text-base max-w-4xl mx-auto mt-3">
          The Chapman Hotel is located along a magnificent stretch of beachfront
          in Port Elizabeth. Situated on Brookes Hill, overlooking the tranquil
          Algoa Bay, The Chapman offers stunning sea views from all of it’s
          hotel rooms.
        </p>
      </header>
      <div className="py-20 px-4 lg:px-0">
        <article className="grid grid-col-1 md:grid-cols-2  gap-4 lg:gap-8 max-w-7xl mx-auto">
          {attractions.map((item) => (
            <div className="w-full flex gap-2" key={item.id}>
              <Image
                src={item.image || "/images/placeholder.webp"}
                width={1920}
                height={1280}
                alt={`Attraction`}
                className="w-1/2 aspect-video object-cover rounded-lg"
              />
              <div className="p-3 lg:p-6">
                <h2
                  className={`${display.className} text-black text-2xl font-bold mt-3`}
                >
                  {item.title}
                </h2>
                <p className="text-sm mt-2 text-slate-700 font-medium line-clamp-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </Fragment>
  );
};
export default page;
