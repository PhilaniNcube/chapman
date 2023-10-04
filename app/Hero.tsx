import Image from "next/image";
import {Playfair_Display} from "next/font/google"
import Link from "next/link";

const display = Playfair_Display({
  display: "swap",
  weight: ["400", "600","700", "800", "900"],
  subsets: ['latin']
})

const Hero = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 isolate">
      <div className="flex-col items-center justify-center hidden w-full h-screen bg-white lg:flex"></div>
      <div className="w-full h-screen bg-black">
        <Image
          src="/images/pool_1.jpg"
          width={4608}
          height={2592}
          priority
          alt="Pool"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[60vh] flex items-center justify-start px-10 lg:px-20 text-slate-800">
          <div className=" px-4 bg-white/70 lg:bg-transparent lg:pt-36 flex py-10 flex-col translate-y-[70px] lg:translate-y-[200px] justify-center w-full items-start mx-auto">
            <h1
              className={`${display.className} text-xl md:text-2xl lg:text-6xl font-semibold text-black`}
            >
              Value for money
              <br /> Accommodation &amp; <br />
              Conferencing
            </h1>
            <p className="mt-3 lg:mt-8 md:text-md text-xs lg:text-lg text-slate-700 lg:leading-7 lg:max-w-[50ch] font-medium">
              Situated on Brookes Hill between King&#39;s Beach, the Blue Flag
              Humewood Beach and the world- renowned water sports mecca of Hobie
              Beach. The Chapman offers the traveller a blend of well- appointed
              accommodation and world-class cuisine in a setting reminiscent of
              lazy summer days of leisure.
            </p>

            <div className="justify-start hidden w-full py-3 space-x-4 text-center lg:flex lg:w-2/3">
              <Link
                href="/accommodation"
                className="px-2 xl:px-8 py-4 mt-5 text-xs text-white uppercase bg-black md:text-md lg:text-md  "
              >
                Browse Rooms
              </Link>
              <Link
                href="/contacts"
                className="px-2 xl:px-8 py-4 mt-5 text-xs text-black uppercase border-2 border-black md:text-md lg:text-md "
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-black">
          <Image
            src="/images/specials.jpg"
            width={900}
            height={900}
            alt="Specials"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
