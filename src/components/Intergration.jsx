import styles from "../style";
import {  socialMedia, intergrationPartner} from "../constants";
import Button from "./Button";

const Intergration = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col  min-h-screen min-w-screen`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]">
        <h1 className={`${styles.heading1} text-left max-w-[1000px]`}>
            Seamless one-click integrations​ with 200+ tools
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph}`}>
          Elloe works natively with your favorite systems, CRM, marketing platforms, order management software, and more—all without a single line of code.
          </p>
        </div>
        
        <div className="absolute z-[1] w-[100%] h-[100%] rounded-full buttom-20 white__gradient"/>
    </div>
      <div  className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {intergrationPartner.map((intergration, index) => (
          <img
            key={intergration.id}
            src={intergration.icon}
            alt={intergration.id}
            className={`w-[200px] h-[100px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(intergration.link)}
          />
        ))}
      </div>
      <Button styles={`mt-10`} />
  </section>
  );

export default Intergration;