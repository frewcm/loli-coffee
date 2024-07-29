import { useState } from "react";
import { Link } from "react-router-dom";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const { pathname } = useLocation();

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
      <ul className="mt-20 gap-4 font-nunito text-xl text-secondary flex flex-col items-center justify-center">
        <li>
          <Link className="text-start" to="/">
            Home
          </Link>
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
  if (pathname === "/location") {
    console.log(true);
  }
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-40 w-full h-20 ${
          color ? "bg-secondary text-primary" : "bg-transparent text-secondary"
        } `}
      >
        <div className="w-10/12 mx-auto h-full flex items-center justify-between gap-10">
          <div>
            <Link to="/">
              {color ||
              pathname === "/location" ||
              pathname === "/contact" ||
              pathname === "/about" ? (
                <img className="w-24" src="logo-black.png" alt="" />
              ) : (
                <img className="w-24" src="logo-white.png" alt="" />
              )}
            </Link>
          </div>
          <div
            className={`hidden lg:flex gap-4 font-nunito text-lg ${
              color || (pathname === "/contact" ? "text-primary" : "")
            }`}
          >
            {color ||
            pathname === "/location" ||
            pathname === "/contact" ||
            pathname === "/about" ? (
              <div className="text-primary lg:flex gap-4 font-nunito text-lg">
                <Link to="/location">Locations</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            ) : (
              <div className="text-secondary lg:flex gap-4 font-nunito text-lg">
                <Link to="/location">Locations</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            )}
          </div>
          <div
            className={`hidden lg:flex gap-4 ${
              color ? "text-secondary" : "text-primary"
            }`}
          >
            .
          </div>
          <RiMenu2Fill
            className={`block lg:hidden transition delay-300 ease-in-out ${
              color && "text-primary"
            } ${pathname === "/location" && "text-primary"}`}
            size={30}
            onClick={() => setOpen(!open)}
          />
        </div>
      </motion.nav>
      {open && content}
    </>
  );
}
