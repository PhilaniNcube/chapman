
import { XataClient } from "../../../utils/xata";
import { display } from "../../AboutSection";



const page = async () => {



  return (
    <div className="my-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-2xl lg:text-4xl font-bold text-center my-4`}
        >
          Chapmans Christmas Lunch Menu
        </h1>

        <p className="text-xl text-center">25 December 2022</p>
        <p className="text-xl text-center">First Sitting 12:00pm to 14:00pm</p>
        <p className="text-xl text-center">Second Sitting 14:30pm to 16:30pm</p>

        <hr className="my-6" />

        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Booking Essential
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Price Per Adult: R395
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Children 10 years &amp; Younger: R275
        </h2>

        <div className="w-full p-6 lg:p-10 my-4 bg-slate-100 rounded">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Starters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">
            <p className="text-lg text-slate-800 py-3">
              Christmas day homemade bread table
            </p>
            <p className="text-lg text-slate-800 py-3">Curry Noodle Salad</p>
            <p className="text-lg text-slate-800 py-3">Greek Salad</p>
            <p className="text-lg text-slate-800 py-3">
              Deep fried hake nuggets
            </p>
          </div>
        </div>
        <div className="w-full p-6 lg:p-10 my-4 bg-slate-100 rounded">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
       Main Course
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">
            <p className="text-lg text-slate-800 py-3">
              Sweet &amp; sour port sosaties
            </p>
            <p className="text-lg text-slate-800 py-3">Roasted chiken</p>
            <p className="text-lg text-slate-800 py-3">Boerewors</p>
            <p className="text-lg text-slate-800 py-3">
              Creamy mushroom potato bake
            </p>
            <p className="text-lg text-slate-800 py-3">
              Variety of grilled vegetables
            </p>
            <p className="text-lg text-slate-800 py-3">
              Savoury Rice
            </p>
          </div>
        </div>
        <div className="w-full p-6 lg:p-10 my-4 bg-slate-100 rounded">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
      Desserts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">
            <p className="text-lg text-slate-800 py-3">
              Cheese Cake
            </p>
            <p className="text-lg text-slate-800 py-3">Nougat ice-cream</p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
