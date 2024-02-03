import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const {user}=useContext(AuthContext)
  console.log(user)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-green-200":""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-green-500 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-green-500 hover:font-semibold"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="md:flex space-x-12 hidden">
            <button>
              <FaBarsStaggered className="w-5 hover:text-green-500" />
            </button>
            {
              user ? user.email : ""
            }
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? 
                <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />
              }
            </button>
            
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-16 py-7 bg-green-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
            
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-base text-white uppercase cursor-pointer"
                >
                  {link}
                </Link>
              ))}  
            
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
