import { analytics } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading3}>
          Insights Backed with 
          <br className="sm:block hidden"/>
          Serious Analytics Muscle
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Bid goodbye to compiling actionable data manually.
          Elloe’s unified, secure dashboard’s got you covered. 
          Move your customer support database away from scattered spreadsheets
          and paper files forever, centralise data at your fingertips.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={analytics} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;