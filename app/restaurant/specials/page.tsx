"use client";

import Link from "next/link";
import { display } from "../../AboutSection";

const page = () => {
  const readMenuAloud = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = `
    THURSDAY 25 DECEMBER 2025 CHRISTMAS LUNCH MENU
    First Sitting: 12:00 PM TO 14:00 PM
    Second Sitting: 14:30 PM TO 16:30 PM
    Bookings are essential and payments in advance
    WIN TWO NIGHTS WEEKEND STAY FOR TWO PEOPLE
    THE RAFFLE WILL TAKE PLACE AFTER LUNCH & THE WINNER WILL BE NOTIFIED BY TEL
    Price Per Adult: R495 +10% Gratuity
    Price Per Child 10 years & Younger: R350
    Christmas crackers included
    All meals are served plated from the buffet table
    Starters
    Homemade garlic & feta breads
    Curry Noodle Salad
    Greek Salad
    Deep fried hake nuggets served with lemon butter sauce
    Main Course
    Roasted pork medallions served with apple sauce
    Beef soasties
    Barbequed chicken
    Grilled beef boerewors
    Seafood bake
    Grilled vegetables
    Savoury rice
    Roasted baby potatoes
    Desserts
    Cheese Cake
    Nougat ice cream
    Bottomless coffee or tea
    Season's Greetings
    Telephone 041 584 0678 : chapmail@iafrica.com
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
          THURSDAY 25 DECEMBER 2025 CHRISTMAS LUNCH MENU
        </h1>
        <div className="flex justify-center w-full">
          <button
            onClick={readMenuAloud}
            className="px-5 py-3 mx-auto text-xl text-center text-white uppercase bg-black w-fit"
          >
            Read Menu Aloud
          </button>
        </div>

        <p className="text-xl font-bold text-center">FIRST SITTING: 12:00 PM TO 14:00 PM</p>
        <p className="text-xl font-bold text-center">SECOND SITTING: 14:30 PM TO 16:30 PM</p>

        <hr className="my-6" />

        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          BOOKINGS ARE ESSENTIAL & PAYMENTS IN ADVANCE
        </h2>
        <div className="max-w-2xl p-4 mx-auto text-white bg-green-700">
          <h2
            className={`${display.className} text-2xl  text-center my-4 capitalize`}
          >
            WIN TWO NIGHTS WEEKEND STAY FOR TWO PEOPLE<br /> THE RAFFLE WILL TAKE PLACE AFTER
            LUNCH &amp; THE WINNER WILL BE NOTIFIED BY TEL
          </h2>
        </div>

        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          PRICE PER ADULT: R495+10% GRATUITY
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          PRICE PER CHILD 10 YEARS &amp; YOUNGER: R350
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          CHRISTMAS CRACKERS INCLUDED
        </h2>
        <h2 className={`${display.className} text-2xl  text-center my-4`}>
          ALL MEALS ARE SERVED PLATED FROM THE BUFFET TABLE
        </h2>

        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Starters
          </h2>

          <div className="grid items-center grid-cols-1 md:grid-cols-2 place-items-center">
            <p className="py-3 text-lg text-slate-800">
              HOMEMADE GARLIC & FETA BREADS
            </p>
            <p className="py-3 text-lg text-slate-800">CURRY NOODLE SALAD</p>
            <p className="py-3 text-lg text-slate-800">GREEK SALAD</p>
            <p className="py-3 text-lg text-slate-800">
              DEEP FRIED HAKE NUGGETS SERVED WITH LEMON BUTTER SAUCE
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
              ROASTED PORK MEDALLIONS SERVED WITH APPLE SAUCE
            </p>
            <p className="py-3 text-lg text-slate-800">BEEF SOASTIES</p>
            <p className="py-3 text-lg text-slate-800">
              BARBEQUED CHICKEN
            </p>
            <p className="py-3 text-lg text-slate-800">GRILLED BEEF BOEREWORS</p>
            <p className="py-3 text-lg text-slate-800">SEAFOOD BAKE</p>
            <p className="py-3 text-lg text-slate-800">
              GRILLED VEGETABLES
            </p>
            <p className="py-3 text-lg text-slate-800">SAVOURY RICE</p>
            <p className="py-3 text-lg text-slate-800">ROASTED BABY POTATOES</p>
          </div>
        </div>
        <div className="w-full p-6 my-4 rounded lg:p-10 bg-slate-100">
          <h2
            className={`${display.className} text-2xl  text-center my-4 font-bold uppercase`}
          >
            Desserts
          </h2>

          <div className="grid items-center grid-cols-1 md:grid-cols-2 place-items-center">
            <p className="py-3 text-lg text-slate-800">CHEESE CAKE</p>
            <p className="py-3 text-lg text-slate-800">NOUGAT ICE CREAM</p>
            <p className="py-3 text-lg text-slate-800">
              BOTTOMLESS COFFEE OR TEA
            </p>
          </div>
          <p className="py-3 text-lg font-bold text-center text-slate-800">
            SEASON&apos;S GREETINGS
          </p>
          <h3 className="font-bold text-center">The Chapman Hotel & Conference Centre</h3>
          <p className="text-center">TELEPHONE 041 584 0678</p>
          <Link href="mailto:chapmail@iafrica.com" className="block text-center">
            chapmail@iafrica.com
          </Link>
        </div>
      </div>
    </div>
  );
};
export default page;
