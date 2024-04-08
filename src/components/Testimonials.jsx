import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/**Adding gradient**/}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] roundend-full blue__gradient"/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]">
        <div>
        <h1 className={`${styles.heading1} text-left max-w-[600px]`}>
          Our customers’ success Story.
          <br className="sm:block hidden"/>
          Your success is our sucesss.
        </h1>
        </div>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph}`}>
            Everything you need to adapt Cloud Computing and grow your business
            anywhere on the planet by seamless intergration.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  );

export default Testimonials;