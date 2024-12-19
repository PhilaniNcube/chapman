"use client";

import Link from "next/link";
import { display } from "../../AboutSection";

const page = async () => {
  const readMenuAloud = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = `
    CHRISTMAS DAY LUNCH 2024.
    25 December 2024.
    First Sitting 12:00pm to 14:00pm.
    Second Sitting 14:30pm to 16:30pm.
    Booking Essential.
    Price Per Adult: R495.
    Children 10 years and Younger: R325.
    Starters.
    Christmas day homemade bread.
    Homemade Garlic and Feta Breads.
    Curry Noodle Salad.
    Greek Salad.
    Deep fried hake nuggets.
    Main Course.
    Sweet and sour pork sosaties.
    Roasted chicken.
    Boerewors.
    Seafood potato bake.
    Variety of grilled vegetables.
    Savoury Rice.
    Desserts.
    Cheese Cake.
    Nougat ice-cream.
    Please note: The prices above do not include a service gratuity.
    Prepayment is a prerequisite. Kindly note that the above excludes a standard 10% service fee which will need to be paid on the day.
    The Chapman Hotel and Conference Centre.
  `;
    speech.lang = "en-ZA";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="px-4 my-6 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <h1
          className={`${display.className} text-2xl lg:text-4xl font-bold text-center my-4`}
        >
          CHRISTMAS DAY LUNCH 2024
        </h1>
        <div className="flex justify-center w-full">
          <button
            onClick={readMenuAloud}
            className="px-5 py-3 mx-auto text-xl text-center text-white uppercase bg-black w-fit"
          >
            Read Menu Aloud
          </button>
        </div>

        <p className="text-xl text-center">25 December 2024</p>
        <p className="text-xl text-center">
          First Sitting 11:45ampm to 13:45pm
        </p>
        <p className="text-xl text-center">Second Sitting 14:15pm to 16:15pm</p>

        <hr className="my-6" />

        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Booking Essential
        </h2>
        <div className="max-w-2xl p-4 mx-auto text-white bg-green-700">
          <h2
            className={`${display.className} text-2xl  text-center my-4 capitalize`}
          >
            WIN A TWO NIGHT WEEKEND FOR TWO THE RAFFLE WILL TAKE PLACE AFTER
            LUNCH &amp; THE WINNER WILL BE NOTIFIED BY EMAIL
          </h2>
        </div>

        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Price Per Adult: R495
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Children 10 years &amp; Younger: R325
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          Chritmas crackers included
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          All meals are served platted from the buffet table
        </h2>

        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Starters
          </h2>

          <div className="grid items-center grid-cols-1 md:grid-cols-2 place-items-center">
            <p className="py-3 text-lg text-slate-800">
              Homemade garlic and feta breads
            </p>
            <p className="py-3 text-lg text-slate-800">
              Homemade Garlic & Feta Breads
            </p>
            <p className="py-3 text-lg text-slate-800">Curry Noodle Salad</p>
            <p className="py-3 text-lg text-slate-800">Greek Salad</p>
            <p className="py-3 text-lg text-slate-800">
              Deep fried hake nuggets served with lemon butter sauce
            </p>
          </div>
        </div>
        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Main Course
          </h2>

          <div className="grid items-center grid-cols-1 md:grid-cols-2 place-items-center">
            <p className="py-3 text-lg text-slate-800">
              Roasted pork medallions served with apple sauce
            </p>
            <p className="py-3 text-lg text-slate-800">Beef sosaties</p>

            <p className="py-3 text-lg text-slate-800">
              Barbequed chicken
            </p>
            <p className="py-3 text-lg text-slate-800">Grilled beef boerewors</p>
            <p className="py-3 text-lg text-slate-800">Seafood bake</p>
            <p className="py-3 text-lg text-slate-800">
           Grilled vegetables
            </p>
            <p className="py-3 text-lg text-slate-800">Savoury rice</p>
            <p className="py-3 text-lg text-slate-800">Roasted baby potatoes</p>
          </div>
        </div>
        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Desserts
          </h2>

          <div className="grid items-center grid-cols-1 md:grid-cols-2 place-items-center">
            <p className="py-3 text-lg text-slate-800">Cheese Cake</p>
            <p className="py-3 text-lg text-slate-800">Nougat ice-cream</p>
            <p className="py-3 text-lg text-slate-800">
              Bottomless coffee or tea
            </p>
          </div>
          <p className="py-3 text-lg text-slate-800">
            Please note: The prices above do not include a service gratuity.
            Prepayment is a prerequisite. Kindly note that the above excludes a
            standard 10% service fee which will need to be paid on the day.
          </p>
          <h3>The Chapman Hotel & Conference Centre</h3>
          <p>Telephone: 041 5840678</p>
          <Link href="mailto:chapmail@iafrica.com">
            Email: chapmail@iafrica.com
          </Link>
        </div>
      </div>
    </div>
  );
};
export default page;
