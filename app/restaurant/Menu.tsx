import Link from "next/link";

const Menu = () => {

  const menuLinks = [
    {
      route: "/restaurant/breakfast",
      title: "Breakfast",
    },
    {
      route: "/restaurant/lunch",
      title: "Lunch",
    },

    {
      route: "/restaurant/dinner",
      title: "Dinner",
    },
    {
      route: "/restaurant/valentines",
      title: "Valentines Day",
    },
  ];

  return <nav className="w-full px-4 lg:px-0">
    <div className="flex flex-col justify-between mx-auto space-y-3 border-b border-black max-w-7xl lg:flex-row lg:space-y-0">
      {menuLinks.map((link, i) => (
        <Link key={link.route} href={link.route} className="w-full py-3 text-xl text-center text-black uppercase" >{link.title}</Link>
      ))}
    </div>
  </nav>;
};
export default Menu;
