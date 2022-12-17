import Image from "next/image";
import Link from "next/link";
import { links } from "../data";

const Footer = () => {

  const date = new Date();

  const year = date.getFullYear();

  return (
    <footer className="bg-slate-100 px-4">
      <div className="max-w-7xl mx-auto py-10">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center border-b border-slate-400 py-5">
          <Image
            src="/images/logo.jpg"
            width={227}
            height={193}
            alt="Logo"
            className="w-20 lg:w-36 object-cover"
          />
          <div>
            <p className="text-xs max-w-[50ch]">
              Established in 1998, The Chapman Hotel & Conference Centre is a
              family business, which is owned and managed by the Franklin
              family.{" "}
            </p>
            <Link
              href="https://athenamedia.co.za"
              className="text-xs max-w-[50ch]"
            >
              The Chapman Hotel &copy; {year}
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center">
          <nav className="flex flex-col lg:flex-row lg:space-y-0 space-y-3 lg:space-x-3 mt-6">
            {links.map((link) => (
              <Link href={link.url} key={link.id} className="uppercase font-medium text-black">{link.text}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
