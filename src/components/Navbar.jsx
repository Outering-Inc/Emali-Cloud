import React, { useState } from 'react';
import { logo } from "../assets";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NavLinks from "./NavLinks";
import ButtonDemo from "./ButtonDemo";
import styles from '../style';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`w-full flex mx-auto px-0 py-0 justify-between items-center  navbar bg-black w-[100%] m-auto ${styles.stickyNav}`}>
      <div className="z-50 p-2 md:w-auto w-full justify-between">
        {/* Wrap logo in Link component */}
        <Link to="/" className="md:cursor-pointer">
          <a href="/">
            <img src={logo} alt="emali-cloud" className="h-20 w-auto" />
          </a>
        </Link>
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
        </div>
      </div>
      <ul className=" md:flex hidden flex item-center items-center gap-4 font-[poppins]">
        <NavLinks />
      </ul>
      <div className="md:block hidden">
        <ButtonDemo />
      </div>
      <div className="md:block hidden">
        <ButtonDemo />
      </div>
      {/**Mobile Navigation**/}
      <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 
        py-24 pl-4 duration-500 ${open ? 'left-0' : "left -[100%]"}`}>
        <NavLinks />
        <div className="py-5">
          <ButtonDemo />
        </div>
        <div className="md:block hidden">
          <ButtonDemo />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
