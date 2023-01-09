import { display } from "../AboutSection";

const AboutPortElizabeth = () => {
  return (
    <section className="px-4 lg:px-0 py-20">
      <h2
        className={`${display.className} text-xl md:text-3xl lg:text-4xl font-bold text-center`}
      >
        About Port Elizabeth
      </h2>
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 mt-4">
        <p className="text-slate-700 text-sm md:text-md">
          Port Elizabeth, the fifth largest city in South Africa, is situated in
          Algoa Bay on the South Eastern Coast of South Africa, about half-way
          between Cape Town and Durban. It is South Africa&apos;s second oldest
          city and the commercial capital of the Eastern Cape.
        </p>
        <p className="text-slate-700 text-sm md:text-md">
          In 1820, 4000 British settlers arrived by sea to become the first
          permanent British residents of the area. The first of three commercial
          ships to enter Algoa Bay on the 10th April 1820 was the Chapman. The
          Chapman Hotel is named after this famous British Settler Ship.
        </p>
        <p className="text-slate-700 text-sm md:text-md">
          These settlers settled near Grahamstown establishing, what are today,
          South Africa’s oldest parks, newspapers, hotels, churches and pubs. On
          6th June 1820, Sir Rufane Donkin, Acting Governor of the Cape Colony
          at the time, named the city in memory of his late wife, Elizabeth.
        </p>
        <p className="text-slate-700 text-sm md:text-md">
          The Anti-Apartheid movement received some of its greatest support in
          the Eastern Cape and many of South Africa&apos;s current political
          leaders call the Eastern Cape home. Nelson Mandela was born, bred and
          educated in the Eastern Cape.
        </p>
        <p className="text-slate-700 text-sm md:text-md">
          During the 19th century, Port Elizabeth grew rapidly. This was helped
          by the opening of the railway to Kimberley in 1873. Today, the city is
          home to one of South Africa&apos;s major universities, the Nelson
          Mandela University, as well as being a major African port
          and a manufacturing centre for automobiles.
        </p>
        <p className="text-slate-700 text-sm md:text-md">
          Also referred to as &apos;PE&apos;, &apos;The Friendly City&apos;,
          &apos;Madiba Bay&apos;, &apos;The Windy City&apos;, &apos;Die
          Baai&apos; (Afrikaans) and &apos;Ibhayi&apos; (isiXhosa), Port
          Elizabeth forms part of the Nelson Mandela Municipality,
          which includes Uitenhage, Despatch and Colchester (with a total
          population of approximately 1.5 million people).
        </p>
        <p className="text-slate-700 text-sm md:text-md">
          Port Elizabeth is a rapidly developing metro and was a proud host city
          in the 2010 Soccer World Cup.
        </p>
        <p className="text-slate-700 text-sm md:text-md">
          Port Elizabeth boasts a moderate subtropical climate all year round,
          with visitors being able to enjoy beautiful beaches like King&apos;s Beach,
          Hobie Beach and the Blue Flag Humewood Beach. Summers are warm with
          relatively low humidity, while winters are cool but mild.
        </p>
        <p className="text-slate-700 text-sm md:text-md">
        Port Elizabeth is now called Gqeberha, it was officially renamed on the 23rd of February 2021. Gqeberha was the isiXhosa name for Walmer Township, one of the first and oldest Port Elizabeth townships, it was also the isiXhosa name for the Baakens River that flows right through the city.
        </p>
      </div>
    </section>
  );
};
export default AboutPortElizabeth;
