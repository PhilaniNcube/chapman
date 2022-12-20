import { breakfastMenu } from "../../../data";
import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";

const xata = new XataClient()

const loadBreakFastMenu = async () => {

  const breakfastMenu = await xata.db.menu_items.filter({
    "menu.title": "Breakfast"
  }).getMany()

  return breakfastMenu

}


const page = async () => {

  const menu = await loadBreakFastMenu()

  return (
    <div className="my-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-black text-2xl lg:text-4xl text-center my-6`}
        >
          Breakfast Menu
        </h1>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {menu.map((item, i) => (
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
