import {  nibblesMenu, startersMenu } from "../../../data";
import { display } from "../../AboutSection";

const page = () => {
  return (
    <div className="my-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-black text-2xl lg:text-4xl text-center my-6`}
        >
          Nibbles To Start
        </h1>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {nibblesMenu.map((item, i) => (
            <div className="w-full py-4 px-3" key={i}>
              <h3 className="text-lg font-medium border-b border-dashed border-slate-700">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700">{item.description}</p>
              <h4
                className={`${display.className} font-bold text-black text-xl`}
              >
                R{item.price}
              </h4>
            </div>
          ))}
        </div>
        <h1
          className={`${display.className} text-black text-2xl lg:text-4xl text-center my-6`}
        >
          Starters Menu
        </h1>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {startersMenu.map((item, i) => (
            <div className="w-full py-4 px-3" key={i}>
              <h3 className="text-lg font-medium border-b border-dashed border-slate-700">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700">{item.description}</p>
              <h4
                className={`${display.className} font-bold text-black text-xl`}
              >
                R{item.price}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default page;
