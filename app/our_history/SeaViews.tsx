import Image from "next/image";
import { display } from "../AboutSection";

const SeaViews = () => {
  return (
    <section className="py-20 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <Image
          src="/images/sea_view_4.jpg"
          width={1024}
          height={682}
          className="w-full object-cover aspect-square"
          alt="Sea View"
        />
        <div className="w-full flex items-center justify-center p-6 lg:p-16">
          <div className="bg-white text-center">
            <h2
              className={`${display.className} text-black text-xl md:text-3xl lg:text-4xl font-bold`}
            >
              Panoramic Sea Views
            </h2>
            <p className="text-center text-md lg:text-lg text-slate-700">
              Panoramic sea views may be enjoyed from all of The Chapman&apos;s
              en-suite hotel rooms.
            </p>
            <p className="text-center text-md lg:text-lg text-slate-700">
              The Chapman has its own Conference Centre and private parking for
              both private guests and Tour buses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SeaViews;
