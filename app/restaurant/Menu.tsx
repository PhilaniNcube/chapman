import Link from "next/link";

const Menu = () => {

  const menuLinks = [
    {
      route: "/restaurant/breakfast",
      title: "Breakfast",
    },
    {
      route: "/restaurant/starters",
      title: "Starters",
    },
    {
      route: "/restaurant/vegetarian",
      title: "Vegetarian",
    },
    {
      route: "/restaurant/dinner",
      title: "Dinner",
    },
  ];

  return <nav className="w-full px-4 lg:px-0">
    <div className="max-w-7xl mx-auto flex justify-between border-b border-black">
      {menuLinks.map((link, i) => (
        <Link key={i} href={link.route} className="text-center py-3 text-black w-full uppercase text-xl" >{link.title}</Link>
      ))}
    </div>
  </nav>;
};
export default Menu;