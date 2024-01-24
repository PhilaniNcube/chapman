import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const display = Playfair_Display({
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"]
});

const AboutSection = () => {
  return (
    <article className="relative w-full py-20 isolate">
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        <Image
          src="/images/sea_view_2.jpg"
          width={4608}
          height={2592}
          quality={75}
          className="z-10 hidden object-cover w-full h-full lg:flex aspect-square"
          alt="View"
        />
        <div className="relative z-20 flex flex-col items-start justify-center w-full h-full px-6 py-20 bg-transparent isolate">
          <div className="w-full bg-slate-100 shadow-xl h-full flex flex-col justify-center items-center px-4 py-10 lg:translate-x-[-200px]">
            <h2
              className={`${display.className} text-black text-5xl text-center font-medium`}
            >
              Our Rooms
            </h2>
            <p className="mt-6 text-slate-700 max-w-[60ch] font-medium text-center">
              Inspire your senses with the sounds and secrets of the Indian
              Ocean during your stay in one of The Chapman&apos;s well-aapointed
              rooms. Find out more about our rooms and what is on offer.
            </p>

            <ul className="mt-3 text-sm list-disc text-slate-700">
              <li>
                En-suite bathroom with a bath, separate shower, hand basin, and
                toilet
              </li>
              <li>
                Remote-controlled colour television with M-Net and Satellite TV
              </li>
              <li>
                Executive roller top desk with a designer hand-crafted chair
              </li>
              <li>Hand-crafted coffee table and two chairs</li>
              <li>Free-standing Antique style wardrobe</li>
              <li>Luggage Rack</li>
              <li>Internet Access</li>
              <li>Electrical shaving point</li>
            </ul>

            <Link
              href="/accommodation"
              className="px-8 py-4 mt-5 font-medium text-black uppercase border border-black w-fit"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default AboutSection;
