import { useState } from "react";
import { Link } from "react-router-dom";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const content = (
    <ul className="bg-black z-50 w-2/3 md:w-1/3 h-screen top-0 fixed right-0">
      <div className="p-4 w-full flex justify-end">
        <IoCloseSharp
          className="block lg:hidden text-white"
          size={35}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className="mt-20 gap-4 font-nunito text-lg text-white flex flex-col items-center justify-center">
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Learn</Link>
        </li>
      </ul>
    </ul>
  );
  return (
    <>
      <nav className="fixed z-40 w-full h-20 bg-transparent">
        <div className="w-10/12 mx-auto h-full flex items-center justify-between gap-10">
          <div>
            <img className="w-12" src="loli-logo.png" alt="" />
          </div>
          <div className="hidden lg:flex gap-4 font-nunito text-lg text-white">
            <Link to="/">Locations</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Learn</Link>
          </div>
          <div className="hidden lg:flex gap-4">
            <SiMaterialdesignicons className="text-white" size={25} />
            <SiMaterialdesignicons className="text-white" size={25} />
          </div>
          <RiMenu2Fill
            className="block lg:hidden text-white"
            size={30}
            onClick={() => setOpen(!open)}
          />
        </div>
      </nav>
      {open && content}
    </>
  );
}
