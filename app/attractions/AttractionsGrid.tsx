import Image from "next/image";
import { attractions } from "../../data";
import { display } from "../AboutSection";

const AttractionsGrid = () => {
  return <div className="py-20 px-4 lg:px-0">
    <article className="grid grid-col-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-7xl mx-auto">
      {attractions.map(item => (
        <div className="w-full" key={item.id}>
          <Image src={item.image} width={item.width} height={item.height} alt={item.title} className="w-full aspect-video object-cover rounded-lg" />
          <h2 className={`${display.className} text-black text-2xl font-bold mt-3`}>{item.title}</h2>
        </div>
      ))}
    </article>
  </div>;
};
export default AttractionsGrid;
