import React from 'react';
import styles from '../../style';
import { jobnavLinks } from '../../constants';

const JobNavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu flex gap-8">
        {jobnavLinks.map((link) => (
          <li2
            key={link.id}
            className="menuList text-[#6f6f6f] hover:text-blueColor"
          >
            {link.title}
          </li2>
        ))}
      </div>
    </div>
  );
};

export default JobNavBar;
