"use client"
import Image from "next/image";
import Link from "next/link";
import { links } from "../data";
import analytics from "../utils/analytics";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { MenuIcon } from "lucide-react";


const Navbar = () => {

    analytics.page();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
      {/** Desktop Menu **/}
      <nav className="flex items-center justify-between px-3 py-1 mx-auto shadow-lg max-w-7xl lg:px-8 bg-white/70">
        <Image
          src="/images/logo.jpg"
          width={227}
          height={193}
          alt="logo"
          priority
          className="object-cover w-32 lg:w-24"
        />

        <div className="items-center hidden gap-2 space-x-3 md:flex">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="font-medium text-gray-800 uppercase text-md"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className="w-6 h-6 text-gray-800" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>

              </SheetHeader>
              <div className="flex flex-col mt-3 space-y-3">
                {links.map((link) => (
                  <Link
                    href={link.url}
                    key={link.id}
                    className="font-medium text-gray-800 uppercase text-md"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
