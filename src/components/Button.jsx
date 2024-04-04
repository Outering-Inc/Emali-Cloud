import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

Button.propTypes = {
  styles: PropTypes.string, // Define PropTypes for styles prop
};

export default Button;
