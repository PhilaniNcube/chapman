import { display } from "../AboutSection";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Chapman Hotel - Contacts",
  description: "Established in 1998, The Chapman Hotel & Conference Centre is a family business, which is owned and managed by the Franklin family. The Chapman Hotel includes the internationally famous restaurant, Blackbeards® Tavern, which, besides being known as Port Elizabeth's Seafood Landmark, has been a wine and dine destination for the tourism industry since 1975.",
  keywords: "hotel, history, luxury, Port Elizabeth, South Africa",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.chapman.co.za/contacts"
  },
  openGraph: {
    title: "The Chapman Hotel - Contacts",
    description: "Established in 1998, The Chapman Hotel & Conference Centre is a family business, which is owned and managed by the Franklin family. The Chapman Hotel includes the internationally famous restaurant, Blackbeards® Tavern, which, besides being known as Port Elizabeth's Seafood Landmark, has been a wine and dine destination for the tourism industry since 1975.",
    images: ["https://www.chapman.co.za/images/aerial_2.jpg"]
  },
  viewport: "width=device-width, initial-scale=1.0"
}

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
