"use client"

import Image from 'next/image';
import Link from 'next/link';
import { rooms } from "../../data";
import { display } from "../AboutSection";

const RoomsGrid = () => {
  return (
    <article className="px-4 py-20 lg:px-0">
      <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2">
        {rooms.map((room) => (
          <section className="w-full" key={room.id}>
            <Image
              src={room.images[0]}
              alt={room.title}
              width={1280}
              height={900}
              quality={100}
              className="object-cover w-full aspect-video rounded-xl"
            />
            <div className="w-full mt-4">
              <h3
                className={`${display.className} font-bold text-black text-xl lg:text-2xl`}
              >
                {room.title}
              </h3>

              <p className="my-3 text-lg font-medium text-slate-700">
                {room.description}
              </p>
              <p className="my-3 text-md">
                Full Chapman Breakfast @ R95 p/p
              </p>
              <div className="flex justify-between w-full px-3 py-2 mb-6 text-black rounded-lg shadow bg-slate-200">
                <div>
                  <p className="text-md">Normal Price</p>
                  <p className="text-lg font-bold">R{room.in_season}/night</p>
                </div>
                <div>
                  <p className="text-md">Special Price</p>
                  <p className="text-lg font-bold">R{room.special_rate.rate_per_room}/night</p>
                </div>
              </div>

              <Link
                href="https://book.nightsbridge.com/15456"
                className="px-4 py-3 text-lg font-medium text-white uppercase bg-black md:text-xl lg:px-8"
              >
                Book Now
              </Link>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};
export default RoomsGrid;
