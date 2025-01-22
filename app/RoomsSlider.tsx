"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { rooms } from "../data";
import { display } from "./AboutSection";



const RoomsSlider = () => {

  const [count, setCount] = useState(0)

  const next = () => {
    if(count === rooms.length - 1) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

  const prev = () => {
    if(count === 0) {
      setCount(rooms.length - 1)
    } else {
      setCount(count - 1)
    }
  }



  return (
    <div className="w-full py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <h2
            className={`${display.className} text-black text-lg lg:text-3xl font-medium text-center`}
          >
            Fun in the sun, <br />
            Special Accommodation Package
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center overflow-hidden">
            <div className="grid w-full h-full grid-cols-1 mt-8 lg:grid-cols-2">
              <Image
                src={rooms[count].images[0]}
                width={1920}
                height={1280}
                alt={rooms[count].title}
                quality={100}
                className="object-cover w-full h-full aspect-video"
              />
              <div className="w-full p-4 lg:p-8">
                <h3
                  className={`${display.className} text-black font-bold text-xl lg:text-3xl mb-4`}
                >
                  {rooms[count].title}
                </h3>
                <p className="text-sm text-slate-700 lg:text-md">
                  {rooms[count].description}
                </p>
                {rooms[count].breakfast === true ? (
                  <div className="px-4 py-2 mt-4 font-bold text-center bg-sky-700 text-slate-50">
                    <p>This room includes a complimentary breakfast!</p>
                  </div>
                ) : null}

                <div className="h-[1px] bg-slate-600 w-full my-3" />

                <div className="flex justify-between w-full mb-8">
                  <div>
                    <p className="text-lg uppercase text-slate-700">From</p>
                    <h5
                      className={`${display.className} text-black text-xl lg:text-3xl font-medium`}
                    >
                      R {rooms[count].in_season}{" "}
                      <span className="text-slate-400">
                        / night (in season)
                      </span>
                    </h5>
                    <h5
                      className={`${display.className} text-black text-xl lg:text-3xl font-medium`}
                    >
                      R {rooms[count].off_season}{" "}
                      <span className="text-slate-400">
                        / night (off season)
                      </span>
                    </h5>
                  </div>
                </div>

                {rooms[count].special_rate.enabled === true ? (
                  <div className="px-4 py-8 my-4 font-bold text-center bg-green-700 text-slate-50">
                    <h3 className="text-2xl font-semibold">
                      {rooms[count].special_rate.title}
                    </h3>
                    <p className="text-lg underline text-slate-200">
                      {rooms[count].special_rate.description}
                    </p>
                    <p className="text-lg text-slate-100">
                      {rooms[count].special_rate.capacity === 1 ? (`Single Room sleeps: 1 guest including breakfast`) : rooms[count].special_rate.capacity === 2 ? (`Double Room sleeps: 2 guests including breakfast`) : (`Family Room sleeps: ${rooms[count].special_rate.capacity} guests including breakfast`)}
                    </p>
                    <p className="mt-4">
                      {rooms[count].special_rate.capacity === 1 ? (`Special Room Rate R${rooms[count].special_rate.rate_per_person} per night`) : rooms[count].special_rate.capacity === 2 ? (`Special Rate Per Room: R${rooms[count].special_rate.rate_per_person} (R${rooms[count].special_rate.rate_per_room}) per guest sharing per night`) :
                      (`Special Rate Per Room: R${rooms[count].special_rate.rate_per_person} (R${rooms[count].special_rate.rate_per_room}) per guest sharing per night`)}

                    </p>

                    <p className="mt-8">
                      <Link
                        href="mailto:chapmail@iafrica.com"
                        className="p-3 bg-white text-slate-800"
                      >
                        Book Here
                      </Link>
                    </p>
                  </div>
                ) : null}

                {/* <Link
                  href="/accommodation"
                  className="px-4 py-2 mt-5 text-sm text-white uppercase bg-black lg:text-xl lg:px-8"
                >
                  Book Now
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-2 mt-8">
          <button
            type="button"
            onClick={prev}
            className="flex items-center space-x-3"
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <p className="text-black uppercase text-md lg:text-lg">Prev</p>
          </button>

          <Link
            href="/accommodation"
            className="px-4 py-3 text-lg text-center text-black uppercase border border-black lg:text-xl lg:px-8"
          >
            Browse Rooms
          </Link>

          <button
            type="button"
            onClick={next}
            className="flex items-center space-x-3"
          >
            {" "}
            <p className="text-black uppercase text-md lg:text-lg">Next</p>
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RoomsSlider;
