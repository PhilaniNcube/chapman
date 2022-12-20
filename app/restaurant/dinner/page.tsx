
import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";


const xata = new XataClient();

const loadMenu = async () => {
  const starters = await xata.db.menu_items
    .filter({
      "menu.title": "Starters",
    })
    .getMany();

  const foccacia = await xata.db.menu_items
    .filter({
      "menu.title": "Foccacia",
    })
    .getMany();

  const salad = await xata.db.menu_items
    .filter({
      "menu.title": "Salads",
    })
    .getMany();

  const soup = await xata.db.menu_items
    .filter({
      "menu.title": "Soups",
    })
    .getMany();

  const vegetarian = await xata.db.menu_items
    .filter({
      "menu.title": "Vegetarian Dishes",
    })
    .getMany();

  const pasta = await xata.db.menu_items
    .filter({
      "menu.title": "Pasta",
    })
    .getMany();

  const pizza = await xata.db.menu_items
    .filter({
      "menu.title": "Pizza",
    })
    .getMany();

  const combos = await xata.db.menu_items
    .filter({
      "menu.title": "Combos and Platters",
    })
    .getMany();

  const grills = await xata.db.menu_items
    .filter({
      "menu.title": "Meat Grills",
    })
    .getMany();

  const poultry = await xata.db.menu_items
    .filter({
      "menu.title": "Poultry Grills",
    })
    .getMany();

  const seafood = await xata.db.menu_items
    .filter({
      "menu.title": "Seafood Dishes",
    })
    .getMany();

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
    starters,
    foccacia,
    salad,
    soup,
    vegetarian,
    pasta,
    pizza,
    combos,
    grills,
    poultry,
    seafood,
    dessert,
    kiddies,
  };
};


const page = async () => {

  const {
    starters,
    foccacia,
    salad,
    soup,
    vegetarian,
    pasta,
    pizza,
    combos,
    grills,
    poultry,
    seafood,
    dessert,
    kiddies,
  } = await loadMenu();

  return (
    <div className="my-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-black text-2xl lg:text-4xl text-center my-6`}
        >
          Starter
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          Our starter menu
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {starters.map((item, i) => (
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
          Foccacia
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          From our wood burning stove
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {foccacia.map((item, i) => (
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
          Salads
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3"></p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {salad.map((item, i) => (
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
          Soups
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3"></p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {soup.map((item, i) => (
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
          Vegetarian Dishes
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3"></p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {vegetarian.map((item, i) => (
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
          Pasta
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          Served with either spaghetti or tagliatelle
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {pasta.map((item, i) => (
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
          Pizza
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          From our wood burning pizza oven (all the below tomato and mozzarella
          cheese)
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {pizza.map((item, i) => (
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
          Combos and Platters
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          Served with a choice of rice or chips or salad
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {combos.map((item, i) => (
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
          Meat Grills
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          Served with a choice of vegetables in season or chips.
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {grills.map((item, i) => (
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
          Poultry Grills
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          Served with a choice of vegetables in season or chips.
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {poultry.map((item, i) => (
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
          Seafood Dishes
        </h1>

        <p className="text-center max-w-[250px] mx-auto text-md text-slate-700 mt-3">
          Served with a choice of vegetables in season or chips.
        </p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 border-slate-300 mb-5">
          {seafood.map((item, i) => (
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
