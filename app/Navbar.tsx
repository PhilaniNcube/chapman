import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { links } from "../data";

const Navbar = () => {
  return <header className="px-4 absolute top-0 left-0 right-0 py-6 z-50">
    {/** Desktop Menu **/}
     <nav className="max-w-7xl mx-auto px-8 shadow-lg py-2 bg-white flex items-center justify-between">
       <Image src="/images/logo.jpg" width={227} height={193} alt="logo" className="w-40 object-cover" />

       <div className="flex gap-2 space-x-3 items-center">
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="text-gray-800 uppercase text-md font-medium" >{link.text}</Link>
        ))}
       </div>
     </nav>
  </header>;
};
export default Navbar;
