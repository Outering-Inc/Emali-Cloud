import {  action, support } from "../constants";
import styles from "../style";
import ActionCard from "./ActionCard";
import Button from "./Button";

const Action = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    {/**Adding gradient**/}
    <div className="absolute z-[0] w-[50%] h-[50%] -right-[20%] roundend-full blue__gradient"/>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]">
      <h1 className={`${styles.heading1} text-left max-w-[1000px]`}>
        Join Thousands of Top Companies
      </h1>
    </div>
    {/**Adding gradient**/}
    <div className="absolute z-[0] w-[100%] h-[40%] -right-[50%] roundend-full blue__gradient"/>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {action.map((card) => (
        <ActionCard key={card.id} {...card}/>
      ))}
    </div>
    <div>
    <Button styles={`mt-10`} />
    <Button styles={`mt-10`} />
    {/**Adding gradient**/}
    <div className="absolute z-[0] w-[100%] h-[40%] -right-[50%] roundend-full blue__gradient"/>
    </div>
  </section>
  );

export default Action;