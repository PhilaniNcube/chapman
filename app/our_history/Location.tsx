import Image from "next/image";
import { display } from "../AboutSection";

const Location = () => {
  return (
    <section className="py-20 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto w-full text-center text-black">
        <h2
          className={`${display.className} text-xl md:text-2xl lg:text-3xl font-medium`}
        >
          Location
        </h2>

        <p className="text-md lg:text-lg text-slate-700 max-w-[70ch] mx-auto mt-3">
          Situated on Brookes Hill between King&apos;s Beach, the Blue Flag
          Humewood Beach and the world-renowned water sports mecca of Hobie
          Beach, The Chapman offers the traveller a blend of well-appointed
          accommodation and world-class cuisine in a setting reminiscent of lazy
          summer days of leisure.
        </p>

        <div className="flex justify-between mt-6 gap-4 lg:gap-10">
          <Image
            src="/images/humewood-beach.jpg"
            width={1280}
            height={960}
            alt="Humewood Beach"
            className="aspect-video object-cover lg:w-1/2 w-full "
          />
          <Image
            src="/images/hobie_beach.jpg"
            width={1000}
            height={750}
            alt="Hobie Beach"
            className="aspect-video object-cover lg:w-1/2 w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Location;
