import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";

const page = async () => {
  return (
    <div className="my-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-2xl lg:text-4xl font-bold text-center my-4`}
        >
          Valentines Menu
        </h1>

        <p className="text-xl text-center">Wednesday 14 February 2024</p>
        <p className="text-xl text-center">Time 17:00pm to 22:00pm</p>

        <hr className="my-6" />

        <h2 className={`${display.className} text-md  text-center my-4`}>
          All meals will be ordered from and served to you at your table
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Valentines Day Dinner R395 Per Person + 10% Standard Service Gratuity
        </h2>

        <div className="w-full p-6 lg:p-10 my-4 bg-slate-100 rounded">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Starters
          </h2>
          <p className="text-lg text-slate-800 py-3 text-center">Choice of*</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Fresh Rocket and Creamy Beef Masala Strips Tortilla
              </p>
              <small className="text-xs max-w-[45ch]">
                Mini tortilla wraps prepared with a fresh rocket and creamy beef
                masala strips filling
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">Mediterranean Salad</p>
              <small className="text-xs max-w-[45ch]">
                A variety of green and red cabbage strips, poppy seeds and nuts,
                marinated in a balsamic vineger and soya dressing
              </small>
            </span>
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">Smoked Salmon Salad</p>
              <small className="text-xs max-w-[45ch]">
                Strips of smoked salmon served on a bed of green, cherry
                tomatoes and English cucumber and sprinkled with lemon zest
              </small>
            </span>
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Blackbeard&apos;s Homemade Bread Platter
              </p>
              <small className="text-xs max-w-[45ch]">
                Served with a variety of a creamy mushroom Pate&apos;, a sweet
                chill Pate&apos;,and a Chicken liver Pate&apos;
              </small>
            </span>
          </div>
        </div>

        <div className="w-full p-6 lg:p-10 my-20 bg-slate-100 rounded">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Main Course
          </h2>
          <p className="text-lg text-slate-800  text-center font-bold">
            All Meals Served With:
          </p>
          <p className="text-md text-slate-800 pb-3 text-center">
            Caramelized Roasted Vegetable kebabs drizzled with a honey and
            mustard dressing Golden Fried Spring Onion Roast Potatoes
            Blackbeards Savoury Rice
          </p>
          <p className="text-lg font-bold text-slate-800 pt-3 text-center">
            Choice of*
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Pan Fried Line fish choice of Fillets
              </p>
              <small className="text-xs max-w-[45ch]">
                Chef’s choice Line fish fillets , pan fried with lemon and
                herbs, served with Lemon Butter, Garlic Butter or Peri-Peri
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Seafarers Hot Mix Seafood Penne
              </p>
              <small className="text-xs max-w-[45ch]">
                A selection of Shrimps ,calamari, mussels crab sticks and line
                fish , pan fried in lemon ,herbs, and spices and served in a
                seafood marinara ,consisting of whole peeled tomato ,mushroom
                and white wine together with Penne Pasta.
              </small>
            </span>
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Blackbeards medallions of Beef Rosso
              </p>
              <small className="text-xs max-w-[45ch]">
                Roasted beef medallions , Marinated in a brown ,red wine and
                herb sauce
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">Cannelloni Italia</p>
              <small className="text-xs max-w-[45ch]">
                Homemade mini cannelloni portions prepared with chicken ,
                spinach and feta and topped with a whole peeled tomato marinara,
                Fresh cream, and parmesan cheese and baked in our Italian pizza
                oven.
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Butternut , Mushroom and Feta Bake
              </p>
              <small className="text-xs max-w-[45ch]">
                Cubed butternut , mushrooms and feta cheese ,topped with a
                creamy mushroom sauce and baked with mozzarella
              </small>
            </span>
          </div>
        </div>

        <div className="w-full p-6 lg:p-10 my-4 bg-slate-100 rounded">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Dessert
          </h2>{" "}
          <p className="text-lg font-bold text-slate-800 pt-3 text-center">
            Choice of*
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </div>
  );
};
export default page;
