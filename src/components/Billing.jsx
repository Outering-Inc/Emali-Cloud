import { apple, bill, google,hospitality } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={hospitality} alt="hospitality" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h1 className={styles.heading1}>
        SUPPORT & EXPERIENCE
      </h1>
      <h2 className={styles.heading1}>
        Automatically resolve 80% of<br className="sm:block hidden"/> 
        your customer inquiries.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
        Elloe’s conversational AI proactively engages with customers based on who they are,
        where they are, and what they are trying to do—all before involving an agent. 
        Coupled with a robust set of conversational AI insight tools—including NLP training 
        and labeling—you’ll find Elloe conversations get smarter all the time. 
        More importantly, they drive resolution rates up to an average of 80%, and cost per interaction down.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;