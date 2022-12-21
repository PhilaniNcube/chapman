import { display } from "../AboutSection";

const AttractionsHero = () => {
  return (
    <header className="min-h-[60vh] pt-40 flex flex-col items-center justify-center text-center">
      <h1
        className={`${display.className} text-black text-2xl lg:text-5xl font-bold`}
      >
        Attractions
      </h1>
      <p className="text-slate-700 text-base max-w-4xl mx-auto mt-3">
        The Chapman Hotel is located along a magnificent stretch of beachfront
        in Port Elizabeth. Situated on Brookes Hill, overlooking the tranquil
        Algoa Bay, The Chapman offers stunning sea views from all of it’s hotel
        rooms.
      </p>
    </header>
  );
};
export default AttractionsHero;
