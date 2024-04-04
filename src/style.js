const styles = {
  bgPrimary: "bg-primary",
  bgSecondary: "bg-secondary",
  bgOrange: "bg-orange", // Added
  bgBlue: "bg-blue",
  bgWhite:"bg-white",
  boxWidth: "xl:max-w-[1280px] w-full",
  boxWidthSection: "xl:max-w-[1280px] w-full bg-orange",

  stickyNav: "fixed top-0 left-0 right-0 z-50",

  heading1: "font-poppins font-semibold xs:text-[32px] text-[40px] text-gradient xs:leading-[46.8px] leading-[66.8px] w-full",
  heading2: "font-poppins font-semibold xs:text-[35px] text-[15px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading3: "font-poppins font-semibold xs:text-[35px] text-[15px] text-orange-gradient xs:leading-[76.8px] leading-[66.8px] w-full",
  heading4: "font-poppins font-semibold xs:text-[28px] text-[10px] text-purple-gradient xs:leading-[76.8px] leading-[66.8px] w-full",
  heading5: "font-poppins font-semibold xs:text-[20px] text-[10px] text-white  xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexCenter2: "flex justify-center items-center bg-white",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  dropdownContent: "border shadow-md overflow-hidden w-160 mt-4 mx-2 rounded-lg transition ease-in-out duration-300 text-black-800 bg-white p-4 grid gap-6 flex justify-items-center",
  dropdownHeading: "text-md font-semibold",
  dropdownLink: "text-sm text-gray-600 my-2.5 flex items-center",
  dropdownHover:"hidden group-hover:md:block hover:md:block dark:md:hover:bg-purple-500",
  group: "group",


  heroSection: "relative z-10", // Equivalent to position: relative and z-index: 1
  megaMenu: "absolute z-20", // Equivalent to position: absolute and z-index: 2
  megaMenuHover: "hover\\ +\\ .hero-section\\ visibility\\ hidden;", // Equivalent to .mega-menu:hover + .hero-section { visibility: hidden; 
 
  learnMoreContainer: "flex items-center",
  

};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};


export default styles;