import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../constants";
import styles from "../style";
import { BiHeadphone,BiUserPlus,BiSolidMap } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import MegaDeal from "./MegaDeal";
import MegaBanner from "./MegaBanner";
import { GoRocket } from "react-icons/go";
import { ImSpinner3 } from "react-icons/im";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMouseOver = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div
            className={`min-w-[100px] px-5 text-left md:cursor-pointer  ${styles.group}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <h1
              className={`py-6 flex justify-between md:pr-0 pr-5 ${styles.group} ${styles.heading5}`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* Your icon for chevron-up/down */}
            </h1>
            {link.submenu && (
              <div>
                <div
                  className={`left-1/4 transform -translate-x-1/4 -ml-5 absolute hidden ${styles.dropdownHover} ${styles.megaMenu} ${styles.megaMenuHover}`}
                >
                  <div className="py-3">{/* Arrow icon */}</div>
                  <div
                    className={`${styles.dropdownContent}`}
                    style={{
                      gridTemplateColumns: `repeat(${link.colCount}, 1fr)`,
                    }}
                  >
                    {link.sublinks.map((mysublinks, idx) => (
                      <div key={idx}>
                        <h2 className={`${styles.dropdownHeading}`}>
                          {mysublinks.Head}
                        </h2>
                        <ul>
                          {mysublinks.sublink.map((slink, subIdx) => (
                            <li key={subIdx} className={`${styles.dropdownLink}`}>
                              <Link
                                to={slink.link} 
                                className="hover:text-primary flex items-center"
                              >
                                <span className="icon">
                                  {slink.icon === BiHeadphone && (
                                    <BiHeadphone />
                                  )}
                                  {slink.icon === BiUserPlus && (
                                    <BiUserPlus />
                                  )}
                                   {slink.icon === BiSolidMap && (
                                    <BiSolidMap />
                                  )}
                                  {slink.icon === IoIosRocket && (
                                    <IoIosRocket />
                                  )}
                                   {slink.icon === ImSpinner3 && (
                                    <ImSpinner3 />
                                  )}
                                   {slink.icon === GoRocket && (
                                    <GoRocket />
                                  )}
                                  {slink.component === MegaDeal && (
                                   <MegaDeal name1={slink.name1} subname1={slink.subname1}/>
                                  )}
                                   {slink.component === MegaBanner && (
                                   <MegaBanner name2={slink.name2} subname2={slink.subname2}/>
                                  )}
                                </span>
                                {slink.img && (
                                  <img
                                    src={slink.img}
                                    alt={slink.name}
                                    className="ml-1 icon"
                                  />
                                )}
                                <span className="ml-2">
                                  <span className="block font-bold text-blue-800">
                                    {slink.name}
                                  </span>
                                  <span className="block text-sm text-black-600">
                                    {slink.subname}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                    {/* Chevron icon */}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li key={slink.name} className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
