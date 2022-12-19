import { display } from "../AboutSection";

const page = () => {
  return (
    <main className="pt-64 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`${display.className} text-2xl lg:text-4xl font-bold text-center`}
        >
          Contacts
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 mt-6">
          <div>
            <h3 className="font-bold text-black">Telephone:</h3>
            <h3 className="font-bold text-black">+27 41 584-0678</h3>
          </div>
          <div>
            <h3 className="font-bold text-black">Latitude:</h3>
            <h3 className="font-bold text-black">{`-33°58"42.70' (-33.978527)`}</h3>
          </div>
          <div>
            <h3 className="font-bold text-black">Fax:</h3>
            <h3 className="font-bold text-black"> +27 41 584-0682</h3>
          </div>
          <div>
            <h3 className="font-bold text-black">Longitude:</h3>
            <h3 className="font-bold text-black">{`25°38"56.79' (25.649107)`}</h3>
          </div>
          <div>
            <h3 className="font-bold text-black">Email:</h3>
            <h3 className="font-bold text-black"> chapmail@iafrica.com</h3>
            <h3 className="font-bold text-black"> info@chapman.co.za</h3>
          </div>
          <div>
            <h3 className="font-bold text-black">Address:</h3>
            <h3 className="font-bold text-black">
              Brookes Hill, Humewood, Port Elizabeth, South Africa, 6001
            </h3>
          </div>
        </div>

        <p className="text-slate-700 text-md text-center mt-6"></p>
      </div>
    </main>
  );
};
export default page;
