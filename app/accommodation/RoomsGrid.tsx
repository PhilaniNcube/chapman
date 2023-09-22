"use client"

import Image from 'next/image';
import Link from 'next/link';
import { rooms } from "../../data";
import { display } from "../AboutSection";

const RoomsGrid = () => {
  return (
    <article className="py-20 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <section className="w-full" key={room.id}>
            <Image
              src={room.images[0]}
              alt={room.title}
              width={1280}
              height={900}
              quality={100}
              className="w-full aspect-video object-cover rounded-xl"
            />
            <div className="w-full mt-4">
              <h3
                className={`${display.className} font-bold text-black text-xl lg:text-2xl`}
              >
                {room.title}
              </h3>

              <p className="text-lg text-slate-700 font-medium my-3">
                {room.description}
              </p>
              <div className="w-full flex justify-between text-black bg-slate-200 py-2 px-3 rounded-lg shadow mb-6">
                <div>
                  <p className="text-md">In Season Price</p>
                  <p className="text-lg font-bold">R{room.in_season}/night</p>
                </div>
                <div>
                  <p className="text-md">Off Season Price</p>
                  <p className="text-lg font-bold">R{room.off_season}/night</p>
                </div>
              </div>

              <Link
                href="https://book.nightsbridge.com/15456"
                className="bg-black text-white text-lg md:text-xl uppercase font-medium px-4 lg:px-8 py-3"
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
