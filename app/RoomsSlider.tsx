"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { rooms } from "../data";
import { display } from "./AboutSection";



const RoomsSlider = () => {

  let [count, setCount] = useState(0)

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

  console.log(rooms)

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h2
            className={`${display.className} text-black text-3xl font-medium text-center`}
          >
            Well Appointent, <br />
            Luxurious Rooms
          </h2>
          <p className="mt-6 mb-4 text-center w-[50ch] px-6 text-slate-700 text-md">
            Inspire your senses with the sounds and scents of the Indian Ocean
            during your stay in one of The Chapman’s well-appointed rooms.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center overflow-hidden">

              <div

                className={`grid grid-cols-1 lg:grid-cols-2 h-full w-full mt-8`}
              >
                <Image
                  src={rooms[count].images[0]}
                  width={1920}
                  height={1280}
                  alt={rooms[count].title}
                  className="w-full h-full object-cover aspect-video"
                />
                <div className="w-full p-8">
                  <h3
                    className={`${display.className} text-black font-bold text-3xl mb-4`}
                  >
                    {rooms[count].title}
                  </h3>
                  <p className="text-slate-700 text-md">
                    {rooms[count].description}
                  </p>
                  <div className="h-[1px] bg-slate-600 w-full my-3" />

                  <div className="w-full flex justify-between mb-8">
                    <div>
                      <p className="uppercase text-slate-700">From</p>
                      <h5
                        className={`${display.className} text-black text-3xl font-medium`}
                      >
                        R {rooms[count].in_season}{" "}
                        <span className="text-slate-400">
                          / night (in season)
                        </span>
                      </h5>
                      <h5
                        className={`${display.className} text-black text-3xl font-medium`}
                      >
                        R {rooms[count].off_season}{" "}
                        <span className="text-slate-400">
                          / night (off season)
                        </span>
                      </h5>
                    </div>
                  </div>

                  <Link
                    href="/accommodation"
                    className="text-white text-xl bg-black uppercase px-8 py-2 mt-5"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <button
            onClick={prev}
            className="flex items-center space-x-3"
          >
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
            <p className="text-black text-lg uppercase">Prev</p>
          </button>

          <Link
            href="/accommodation"
            className="border border-black uppercase text-black text-xl px-8 py-3 text-center"
          >
            Browse Rooms
          </Link>

          <button
            onClick={next}
            className="flex items-center space-x-3"
          >
            {" "}
            <p className="text-black text-lg uppercase">Next</p>
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
