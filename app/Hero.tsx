import Image from "next/image";
import {Playfair_Display} from "@next/font/google"
import Link from "next/link";

const display = Playfair_Display({
  display: "swap",
  weight: ["400", "600","700", "800", "900"],
  subsets: ['latin']
})

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative isolate">
      <div className="h-screen w-full bg-white hidden lg:flex flex-col justify-center items-center"></div>
      <div className="h-screen w-full bg-black">
        <Image
          src="/images/pool_1.jpg"
          width={4608}
          height={2592}
          priority
          alt="Pool"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={` absolute inset-0 flex items-center justify-start text-slate-800`}
      >
        <div className="max-w-7xl px-4 bg-white/70 lg:bg-transparent py-10 flex flex-col translate-y-[100px] lg:translate-y-0 justify-center w-full items-start mx-auto">
          <h1
            className={`${display.className} text-2xl lg:text-6xl font-semibold text-black`}
          >
            Value for money
            <br /> accommodation &amp; <br />
            Conferencing
          </h1>
          <p className="mt-8 text-md text-sm lg:text-lg text-slate-700 leading-7 max-w-[50ch] font-medium">
            Situated on Brookes Hill between King&#39;s Beach, the Blue Flag
            Humewood Beach and the world- renowned water sports mecca of Hobie
            Beach. The Chapman offers the traveller a blend of well- appointed
            accommodation and world-class cuisine in a setting reminiscent of
            lazy summer days of leisure.
          </p>

          <div className="w-full lg:w-1/2 py-3 flex justify-start space-x-4">
            <Link
              href="/accommodation"
              className="bg-black text-white uppercase text-xs md:text-md lg:text-xl w-fit px-8 py-4 mt-5"
            >
              Browse Rooms
            </Link>
            <Link
              href="/contacts"
              className="border-2 border-black text-black uppercase text-xs md:text-md lg:text-xl w-fit px-8 py-4 mt-5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
