import { Playfair_Display } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

export const display = Playfair_Display({
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"]
});

const AboutSection = () => {
  return <article className="relative isolate w-full py-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
      <Image src="/images/sea_view_2.jpg" width={4608} height={2592} quality={75} className="w-full h-full hidden lg:flex aspect-square object-cover z-10" alt="View" />
      <div className="z-20 h-full flex flex-col justify-center items-start bg-transparent relative isolate w-full px-6 py-20">
         <div className="w-full bg-slate-100 shadow-xl h-full flex flex-col justify-center items-center px-4 py-10 lg:translate-x-[-200px]">
          <h2 className={`${display.className} text-black text-5xl text-center font-medium`}>Stay with us <br /> Bring the family!</h2>
          <p className="mt-6 text-slate-700 max-w-[60ch] font-medium text-center">Inspire your senses with the sounds and secrets of the Indian Ocean during your stay in one of The Chapman&apos;s well-aapointed rooms. Find out more about our rooms and what is on offer.</p>

          <Link href="/accommodation" className="border border-black mt-5 w-fit px-8 py-4 uppercase text-black font-medium">Explore Rooms</Link>
         </div>
      </div>
    </div>
  </article>;
};
export default AboutSection;
