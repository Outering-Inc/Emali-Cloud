// MegaBanner.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { safaricom } from "../assets";
import { IoIosArrowRoundForward } from "react-icons/io";

const MegaBanner = ({ name2, subname2 }) => {
  return (
    <div className="relative">
    <div className="flex flex-row space-y-0 items-start ... ">
      {/* Image */}
      <img src={safaricom} alt={name2} className="w-600 h-300 mt-0 ml-2" />
    </div>
    <div className="mt-4">
      {/* Name and Subname */}
      <div className="font-semibold  text-blue-500">
        {name2}
      </div>
      <div className="text-sm text-black-600 mb-2 ">
        {subname2}
      </div>
      {/* Learn More Link */}
      <Link to="/career/" className={`${styles.link} ${styles.learnMoreContainer}`}>
        Learn More <IoIosArrowRoundForward/>
      </Link>
    </div>
    </div>
  );
};

export default MegaBanner;
