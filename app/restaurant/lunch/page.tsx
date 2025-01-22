import { vegetarianMenu } from "../../../data";
import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";

const xata = new XataClient();

const loadMenu = async () => {
  const menu = await xata.db.menu_items
    .filter({
      "menu.title": "Lunch",
    })
    .getMany();

  return menu;
};

const page = async () => {

const menu = await loadMenu()

  return (
    <div className="px-4 my-6 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <h1
          className={`${display.className} text-black text-2xl lg:text-4xl text-center my-6`}
        >
          Lunch Menu
        </h1>
        <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
          {menu.map((item, i) => (
            <div className="w-full px-3 py-4" key={i}>
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
