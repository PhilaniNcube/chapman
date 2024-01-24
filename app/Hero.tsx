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
          <div className=" px-4 bg-white/70 lg:bg-transparent lg:pt-36 flex py-10 flex-col translate-y-[140px] lg:translate-y-[200px] justify-center w-full items-start mx-auto">
            <h1
              className={`${display.className} text-xl md:text-2xl lg:text-6xl font-semibold text-black`}
            >
              Value for money
              <br /> Accommodation &amp; <br />
              Conferencing
            </h1>
            <p className="mt-3 lg:mt-8 md:text-md text-xs lg:text-lg text-slate-700 lg:leading-7 lg:max-w-[50ch] font-medium">
              The Chapman is a stylish boutique hotel in Port Elizabeth,
              offering 23 up-market rooms with stunning sea views. The hotel is
              located near the Port Elizabeth Oceanarium and is designed
              according to four-star standards. All rooms are en-suite and face
              the ocean, with upstairs rooms featuring balconies and air
              conditioning, and downstairs rooms opening onto the garden and
              pool area. The rooms are elegantly furnished with classic
              finishes, providing a luxurious and comfortable stay while
              showcasing the breathtaking views of Algoa Bay.
            </p>

            <div className="justify-start hidden w-full py-3 space-x-4 text-center lg:flex lg:w-2/3">
              <Link
                href="/accommodation"
                className="px-2 py-4 mt-5 text-xs text-white uppercase bg-black xl:px-8 md:text-md lg:text-md "
              >
                Browse Rooms
              </Link>
              <Link
                href="/contacts"
                className="px-2 py-4 mt-5 text-xs text-black uppercase border-2 border-black xl:px-8 md:text-md lg:text-md "
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-black">
          <Image
            src="/images/aerial_1.webp"
            width={4032}
            height={3024}
            alt="Banner"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
