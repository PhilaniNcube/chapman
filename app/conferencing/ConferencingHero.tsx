import Image from "next/image";
import { display } from "../AboutSection";

const ConferencingHero = () => {
  return (
    <div className="h-screen relative isolate">
      <Image
        src="/images/auditorium_1.jpg"
        width={1920}
        height={1280}
        alt="Conference"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <h1
          className={`${display.className} bg-white px-4 lg:px-10 py-4 lg:py-6 text-black font-bold text-2xl md:text-3xl lg:text-5xl`}
        >
         Conferencing
        </h1>
      </div>
    </div>
  );
};
export default ConferencingHero;
