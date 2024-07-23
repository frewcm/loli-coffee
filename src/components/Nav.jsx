import { useState } from "react";
import { Link } from "react-router-dom";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const content = (
    <motion.ul
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary z-50 w-2/3 md:w-1/3 h-screen top-0 fixed right-0"
    >
      <div className="p-4 w-full flex justify-end">
        <IoCloseSharp
          className="block lg:hidden text-secondary"
          size={35}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className="mt-20 gap-4 font-nunito text-lg text-secondary flex flex-col items-center justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/location">Locations</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Learn</Link>
        </li>
      </ul>
    </motion.ul>
  );
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-40 w-full h-20 transition delay-300 ease-in-out ${
          color ? "bg-secondary" : "bg-transparent "
        } `}
      >
        <div className="w-10/12 mx-auto h-full flex items-center justify-between gap-10">
          <div>
            <Link to="/">
              <img className="w-12" src="loli-logo.png" alt="" />
            </Link>
          </div>
          <div
            className={`hidden lg:flex gap-4 font-nunito text-lg transition delay-300 ease-in-out ${
              color ? "text-primary" : "text-secondary"
            }`}
          >
            <Link to="/location">Locations</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Learn</Link>
          </div>
          <div
            className={`hidden lg:flex gap-4 transition delay-300 ease-in-out ${
              color ? "text-primary" : "text-secondary"
            }`}
          >
            <SiMaterialdesignicons className="text-secondary" size={25} />
            <SiMaterialdesignicons className="text-secondary" size={25} />
          </div>
          <RiMenu2Fill
            className={`block lg:hidden transition delay-300 ease-in-out ${
              color ? "text-primary" : "text-secondary"
            }`}
            size={30}
            onClick={() => setOpen(!open)}
          />
        </div>
      </motion.nav>
      {open && content}
    </>
  );
}
