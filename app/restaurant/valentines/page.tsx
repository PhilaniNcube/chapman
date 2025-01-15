import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";

const page = async () => {
  return (
    <div className="px-4 my-6 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <h1
          className={`${display.className} text-2xl lg:text-4xl font-bold text-center my-4`}
        >
          Valentines Menu
        </h1>

        <p className="text-xl text-center">Friday 14 February 2025</p>
        <p className="text-xl text-center">Time 17:00pm to 22:00pm</p>

        <hr className="my-6" />

        <h2 className={`${display.className} text-md  text-center my-4`}>
          All meals will be ordered from and served to you at your table
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Valentines Day Dinner R395 Per Person + 10% Standard Service Gratuity
        </h2>

        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Starters
          </h2>
          <p className="py-3 text-lg text-center text-slate-800">Choice of*</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">
                Fresh Rocket and Tuna Salad Tortilla
              </p>
              <small className="text-xs max-w-[45ch]">
                Mini tortilla wraps prepared with a fresh rocket and tuna salad
                filling
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">
                Mediterranean Salad{" "}
              </p>
              <small className="text-xs max-w-[45ch]">
                A variety of green and red cabbage strips, poppy seeds and nuts,
                marinated in a balsamic vinegar and soya dressing
              </small>
            </span>
            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">Smoked Salmon Salad</p>
              <small className="text-xs max-w-[45ch]">
                Strips of smoked salmon served on a bed of greens, cherry
                tomatoes, and English cucumber, sprinkled with lemon zest
              </small>
            </span>
            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">
                Blackbeard&apos;s Homemade Bread Platter
              </p>
              <small className="text-xs max-w-[45ch]">
                Served with a variety of creamy mushroom pâté, sweet chili pâté,
                and chicken liver pâté
              </small>
            </span>
          </div>
        </div>

        <div className="w-full p-6 my-20 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Main Course
          </h2>
          <p className="text-lg font-bold text-center text-slate-800">
            All Meals Served With:
          </p>
          <p className="pb-3 text-center text-md text-slate-800">
            Caramelized Roasted Vegetable kebabs drizzled with a honey and
            mustard dressing Golden Fried Spring Onion Roast Potatoes
            Blackbeards Savoury Rice
          </p>
          <p className="pt-3 text-lg font-bold text-center text-slate-800">
            Choice of*
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">
                Pan Fried Line fish choice of Fillets
              </p>
              <small className="text-xs max-w-[45ch]">
                Chef’s choice of line fish fillets, pan fried with lemon and
                herbs, served with lemon butter, garlic butter, or peri-peri
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">
                Seafarers Hot Mix Seafood Penne
              </p>
              <small className="text-xs max-w-[45ch]">
                A selection of shrimps, calamari, mussels, crab sticks, and line
                fish, pan fried in lemon, herbs, and spices, served in a seafood
                marinara with whole peeled tomatoes, mushrooms, and white wine,
                together with penne pasta
              </small>
            </span>
            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">
                Blackbeard&apos;s Medallions of Beef Rosso
              </p>
              <small className="text-xs max-w-[45ch]">
                Roasted beef medallions, marinated in a brown, red wine, and
                herb sauce
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">Cannelloni Italia</p>
              <small className="text-xs max-w-[45ch]">
                Homemade mini cannelloni portions prepared with chicken,
                spinach, and feta, topped with whole peeled tomato marinara,
                fresh cream, and parmesan cheese, baked in our Italian pizza
                oven
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="py-3 text-lg text-slate-800">
                Butternut , Mushroom and Feta Bake
              </p>
              <small className="text-xs max-w-[45ch]">
                Cubed butternut , mushrooms and feta cheese ,topped with a
                creamy mushroom sauce and baked with mozzarella
              </small>
            </span>
          </div>
        </div>

        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Dessert
          </h2>{" "}
          <p className="pt-3 text-lg font-bold text-center text-slate-800">
            Choice of*
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3 max-w-[45ch]">
                Mini cheesecake slice baked and served with a melted chocolate
                drizzle And served with Vanilla Ice Cream
              </p>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3 max-w-[45ch]">
                Mini Valentine Koeksuster Served with Vanilla Ice Cream
              </p>
            </span>
          </div>
        </div>

        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl text-center my-4 font-bold uppercase`}
          >
            Valentine&apos;s Special Packages
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3
                className={`${display.className} text-xl font-bold text-center mb-4`}
              >
                Package 1: Dinner, Bed & Breakfast
              </h3>
              <p className="text-lg font-bold text-center text-slate-800">
                R940 Per Person Sharing
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-slate-800">
                  <strong>Includes:</strong>
                </p>
                <ul className="pl-6 space-y-2 list-disc text-slate-800">
                  <li>Accommodation (Friday Night 14/02/2025)</li>
                  <li>Valentine&apos;s Dinner (Friday Night 14/02/2025)</li>
                  <li>Valentine&apos;s Breakfast (Saturday 15/02/2025)</li>
                  <li>
                    Entry into Lucky Draw for one night accommodation for two
                    (B&B)
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3
                className={`${display.className} text-xl font-bold text-center mb-4`}
              >
                Package 2: Dinner Only
              </h3>
              <p className="text-lg font-bold text-center text-slate-800">
                R390 Per Person
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-slate-800">
                  <strong>Includes:</strong>
                </p>
                <ul className="pl-6 space-y-2 list-disc text-slate-800">
                  <li>Valentine&apos;s Dinner (Friday Night 14/02/2025)</li>
                  <li>
                    Entry into Lucky Draw for one night accommodation for two
                    (B&B)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
