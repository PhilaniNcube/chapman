
import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";

const xata = new XataClient();

const loadMenu = async () => {
  const dessert = await xata.db.menu_items
    .filter({
      "menu.title": "Desserts",
    })
    .getMany();

  const kiddies = await xata.db.menu_items
    .filter({
      "menu.title": "Kiddies Meals",
    })
    .getMany();

  return {
    dessert,
    kiddies
  };
};

const page = async () => {

const {dessert, kiddies} = await loadMenu()

  return (
    <div className="my-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-black text-2xl lg:text-4xl text-center my-6`}
        >
          Kiddeis Menu
        </h1>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {kiddies.map((item, i) => (
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
          Dessert Menu
        </h1>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {dessert.map((item, i) => (
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
