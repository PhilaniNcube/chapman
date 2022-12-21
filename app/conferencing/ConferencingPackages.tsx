const ConferencingPackages = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="columns-2 lg:columns-3">
          <p className="text-md lg:text-lg text-slate-700">
            The Chapman Hotel, in conjunction with BLACKBEARDS® Seafood Tavern,
            offers conference and banqueting facilities.
          </p>
          <p className="text-md lg:text-lg text-slate-700">
            Besides being able to offer well-appointed accommodation and
            world-class cuisine for delegates, The Chapman offers guests
            personalized service, with an emphasis being placed on flexibility
            in order to satisfy the client’s requirements.
          </p>
          <p className="text-md lg:text-lg text-slate-700">
            Our focus is on being highly competitive and our comprehensive
            Conference Packages are based on the individual requirements of the
            client regarding the number of people attending the conference,
            seating, equipment requirements, catering requirements as well as
            accommodation requirements.
          </p>
        </div>

        <div className="mt-6 grid gap-6 grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="w-full flex flex-col items-center">
            <h3 className="font-bold text-xl text-black">
              Full 24-hour Conference Delegate Package:
            </h3>

            <ul className="text-md lg:text-lg text-slate-700 list-disc">
              <li>Dinner, bed & breakfast;</li>
              <li>Morning tea/coffee & confectionery;</li>
              <li>Lunch;</li>
              <li>Afternoon tea/coffee & assorted biscuits;</li>
              <li>Complimentary notepads & pens.</li>
            </ul>
          </div>
          <div className="w-full flex flex-col items-center">
            <h3 className="font-bold text-xl text-black">
              Day Delegate Conference Package:
            </h3>

            <ul className="text-md lg:text-lg text-slate-700 list-disc">
              <li>Morning tea/coffee & confectionery;</li>

              <li>Lunch;</li>
              <li>Afternoon tea/coffee & assorted biscuits;</li>
              <li>Use of conference facility and specific equipment;</li>
              <li>Complimentary notepads & pens.</li>
            </ul>
          </div>
        </div>




      </div>
    </div>
  );
};
export default ConferencingPackages;
