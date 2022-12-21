import Image from "next/image";
import { XataClient } from "../../utils/xata";
import { display } from "../AboutSection";

const xata = new XataClient();

const loadData = async () => {
   const attractions = await xata.db.attractions
     .getMany();

     return attractions
}

const AttractionsGrid = async () => {
  const attractions = await loadData();

  return (
    <div className="py-20 px-4 lg:px-0">
      <article className="grid grid-col-1 md:grid-cols-2  gap-4 lg:gap-8 max-w-7xl mx-auto">
        {attractions.map((item) => (
          <div className="w-full flex gap-2" key={item.id}>
            <Image
              src={item.image || "/images/placeholder.webp"}
              width={1920}
              height={1280}
              alt={`Attraction`}
              className="w-1/2 aspect-video object-cover rounded-lg"
            />
            <div className="p-3 lg:p-6">
              <h2
                className={`${display.className} text-black text-2xl font-bold mt-3`}
              >
                {item.title}
              </h2>
              <p className="text-sm mt-2 text-slate-700 font-medium line-clamp-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};
export default AttractionsGrid;
