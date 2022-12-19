import Image from "next/image";
import Link from "next/link";
import { display } from "./AboutSection";

const Conferencing = () => {
  return <article className="relative isolate my-20">
    <Image src="/images/conference.jpg" alt="conference" quality={75} width={2000} height={1333} className="w-full h-full object-cover aspect-square lg:aspect-[6/2]" />
    <div className="absolute inset-0 h-full">
      <div className="max-w-7xl mx-auto flex space-y-4 h-full items-center justify-start">
        <div className="bg-white/80 w-full md:w-3/4 lg:w-1/2 p-10">
          <h2 className={`${display.className} text-black text-3xl font-medium`}>Conferencing &amp; Business</h2>
          <p className="text-slate-700 text-lg my-3">
            Our event and conference facility offers a fresh approach to conferencing. We offer luxury accommodation and world class cuisine for delegates.
          </p>

          <Link href="/conferencing" className="bg-black text-white uppercase px-8 py-3 text-lg mt-4">View Packages</Link>
        </div>
      </div>
    </div>
  </article>;
};
export default Conferencing;
