import Image from "next/image";
import { display } from "../AboutSection";

const HistoryHero = () => {
  return (
    <header className="h-screen relative isolate">
      <Image
        src="/images/sea_view_3.jpg"
        quality={100}
        width={4608}
        height={2592}
        className="h-full w-full object-cover"
        alt="Background"
      />
      <div className="absolute inset-0 flex flex-col px-4 items-center justify-end">
        <div className="bg-white translate-y-32 flex flex-col items-center text-black w-full max-w-7xl mx-auto lg:p-10 p-4 text-center">
          <h1
            className={`${display.className} text-2xl lg:text-4xl text-center font-bold`}
          >
            Our History
          </h1>
          <p className="text-md text-slate-700 max-w-[80ch] mt-5">
            In 1820, 4000 British settlers arrived by sea to become the first
            permanent British residents of the area. The first of three
            commercial ships to enter Algoa Bay on the 10th April 1820 was the
            Chapman. The Chapman Hotel & Conference Centre is named after this
            famous British Settler Ship.
          </p>
        </div>
      </div>
    </header>
  );
};
export default HistoryHero;
