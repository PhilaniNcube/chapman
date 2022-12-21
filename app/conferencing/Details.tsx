import React from "react";
import { display } from "../AboutSection";

export default function Details() {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <h1
              role="heading"
              className={`md:text-5xl text-3xl font-bold leading-10 mt-3 text-slate-800 ${display.className}`}
            >
              Looking to host a conference or event?
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-slate-600"
            >
              Whether you are hosting a small business meeting, product launch,
              cocktail party, wedding reception or important conference, we are
              committed to ensuring that your expectations are satisfied.
            </p>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30"
            >
              <div className="md:flex items-center justify-between">
                <h2
                  className={`${display.className} text-2xl font-semibold leading-6 text-slate-800`}
                >
                  Standard Conference Package
                </h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-800">
                  R425<span className="font-normal text-base">/delegate</span>
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-slate-600">
                This package includes all the amenities mentioned above in the
                package breakdown.
              </p>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              <div className="w-2.5  h-auto bg-slate-700 rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2
                    className={`${display.className} text-2xl font-semibold leading-6 text-slate-800`}
                  >
                    24hr Conference Package
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-800">
                    R1475
                    <span className="font-normal text-base">/delegate*</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-slate-600">
                  This package includes eveything in the standard package in
                  addition to a Single Room for one night plus dinner &
                  breakfast.
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
            >
              <div className="md:flex items-center justify-between">
                <h2
                  className={`${display.className} text-2xl font-semibold leading-6 text-slate-800`}
                >
                  24hr Conference Package
                </h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-800">
                  R1125<span className="font-normal text-base">/mo</span>
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-slate-600">
                This package includes eveything in the standard package in
                addition to a Double Room (2 single beds) for one night plus dinner & breakfast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
