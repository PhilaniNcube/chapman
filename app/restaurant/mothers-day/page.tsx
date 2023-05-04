import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";

const page = async () => {
  return (
    <div className="my-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-2xl lg:text-4xl font-bold text-center my-4`}
        >
          Mothers Day Menu
        </h1>

        <p className="text-xl text-center">Tuesday 14 May 2023</p>
        <p className="text-xl text-center">Time: 12H30 for 13H00</p>

        <hr className="my-6" />

        <h2 className={`${display.className} text-md  text-center my-4`}>
          Bookings are essential. <br />
          Chefs Plated Choice
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          R30 per adult & R250 per child under 7
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          FOR RESERVATIONS: Tel: 0415840678 or email:chapmail@iafrica.com
        </h2>

        <div className="w-full p-6 lg:p-10 my-4 bg-slate-100 rounded">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Starters
          </h2>
          <p className="text-lg text-slate-800 py-3 text-center">
            Homemade Bread Rolls served with choice of*
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">Minestrone soup</p>
              <small className="text-xs max-w-[45ch]">
                A thick soup of Italian origin containing assorted vegetables
                ,beans, pasta & herbs & prepared in a divine whole peeled tomato
                marinada.
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Blackbeards Chef&apos;s Salad{" "}
              </p>
              <small className="text-xs max-w-[45ch]">
                Roasted olives, feta, and mixed peppers served with olive oil
                and balsamic vinegar on the side
              </small>
            </span>
            {/* <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">Smoked Salmon Salad</p>
              <small className="text-xs max-w-[45ch]">
                Strips of smoked salmon served on a bed of green, cherry
                tomatoes and English cucumber and sprinkled with lemon zest
              </small>
            </span> */}
            {/* <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Blackbeard&apos;s Homemade Bread Platter
              </p>
              <small className="text-xs max-w-[45ch]">
                Served with a variety of a creamy mushroom Pate&apos;, a sweet
                chill Pate&apos;,and a Chicken liver Pate&apos;
              </small>
            </span> */}
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
            Denise&apos;s grilled Vegetarian Marseilles Kebabs. Grilled
            Vegetable kebabs marinated in herbs & spices, topped with a spinach
            & feta sauce.
          </p>
          <p className="text-md text-slate-800 pb-3 text-center">
            Spanish Rice: Sauted rice, onion & bell peppers with tomato & herbs
          </p>
          <p className="text-md text-slate-800 pb-3 text-center">
            Roasted Potatoes, garlic and herbs
          </p>
          <p className="text-lg font-bold text-slate-800 pt-3 text-center">
            Choice of*
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">The Old Man Steak</p>
              <small className="text-xs max-w-[45ch]">
                Grilled Sirloin Topped with a Mustard ,Mushroom, Cream and
                Brandy Sauce
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Blackbeards Flame Grilled Chicken Breasts
              </p>
              <small className="text-xs max-w-[45ch]">
                Sauted with Lemon and Herb with a touch of Garlic
              </small>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">Hake Brodino</p>
              <small className="text-xs max-w-[45ch]">
                Hake, Calamari and Mussels cooked in a divine whole peeled
                tomato marinada
              </small>
            </span>

            {/* <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">Cannelloni Italia</p>
              <small className="text-xs max-w-[45ch]">
                Homemade mini cannelloni portions prepared with chicken ,
                spinach and feta and topped with a whole peeled tomato marinara,
                Fresh cream, and parmesan cheese and baked in our Italian pizza
                oven.
              </small>
            </span> */}

            {/* <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3">
                Butternut , Mushroom and Feta Bake
              </p>
              <small className="text-xs max-w-[45ch]">
                Cubed butternut , mushrooms and feta cheese ,topped with a
                creamy mushroom sauce and baked with mozzarella
              </small>
            </span> */}
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
                Chefs plated Parfait
              </p>
            </span>

            <span className="flex flex-col items-start">
              <p className="text-lg text-slate-800 py-3 max-w-[45ch]">
                Chefs tart of the day Chocolate Mousse and Ice Cream
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
