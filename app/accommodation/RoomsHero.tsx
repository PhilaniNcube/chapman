import Image from "next/image";
import { display } from "../AboutSection";

const RoomsHero = () => {
  return <header className="relative isolate h-screen">
    <Image src="/images/family_room.jpg" quality={100} width={1024} height={682} alt="Room" className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex justify-center items-center text-center">
      <h1 className={`${display.className} bg-white px-4 lg:px-10 py-4 lg:py-20 text-black font-bold text-2xl md:text-3xl lg:text-[5rem]`}>Our Rooms</h1>
    </div>
  </header>;
};
export default RoomsHero;
