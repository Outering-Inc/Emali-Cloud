import {  support } from "../constants";
import styles from "../style";
import SupportCard from "./SupportCard";

const Support = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      {/**Adding gradient**/}
      <div className="absolute z-[0] w-[100%] h-[40%] -right-[50%] roundend-full blue__gradient"/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]">
        <h1 className={`${styles.heading1} text-left max-w-[1000px]`}>
            Experience the Future of Customer Engagement with Elloe AI.
        </h1>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {support.map((card) => (
          <SupportCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )

export default Support;