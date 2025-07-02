import { ignition } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        openNavigation
          ? "bg-[#1c2c4d]" // fallback on mobile open
          : "bg-transparent backdrop-blur-md"
      } ${scrolled ? "bg-[rgba(10,24,46,0.7)] shadow-md border-b border-white/10" : ""}`}
    >
      <div
        className={`flex items-center px-5 lg:px-10 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4 lg:py-6"
        }`}
      >
        {/* Logo */}
        <a className="block w-[10rem] xl:mr-8" href="#hero">
          <img src={ignition} width={140} height={20} alt="ignition" />
        </a>

        {/* Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#1c2c4d] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-10 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-code text-2xl uppercase text-white transition-colors hover:text-blue-400 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.onlyMobile ? "lg:hidden" : ""
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Contact Link */}
        <a
          href="#Footer"
          className="hidden lg:block text-white/60 hover:text-white transition-colors text-sm mr-6"
        >
          Contact
        </a>

        {/* Mobile Toggle */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
