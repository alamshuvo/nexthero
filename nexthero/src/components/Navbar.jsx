"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
    const pathName =usePathname()
    console.log(pathName);
    
  const Links = [
    {
      title: "about",
      path: "/about",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className=""> 
      <nav className="bg-red-500 text-white py-4  px-4 flex justify-between items-center">
        <h6 className="text-3xl">
          Next <span className="text-cyan-300">Hero</span>
        </h6>
        <ul className="flex justify-between space-x-4 items-center">
          {Links.map((link) => (
            <Link className={`${pathName=== link.path && "text-cyan-300"}`} href={link.path}>{link.title}</Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
