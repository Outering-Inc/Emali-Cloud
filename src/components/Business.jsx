import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon,title,content,index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () =>  (
    <section id="features" className={`${layout.section} feature-card`}>
      <div className={layout.sectionInfo}>
        <h1 className={styles.heading1}>SUPPORT & EXPERIENCE</h1>
        <h2 className={`${styles.heading1} mt-3`}>
          Automatically resolve 80% of <br className="sm:block hidden"/> your customer inquiries.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          Emali’s conversational AI proactively engages with customers based on who they are,
          where they are, and what they are trying to do—all before involving an agent. 
          Coupled with a robust set of conversational AI insight tools—including NLP training and labeling—you’ll find Elloe conversations get smarter all the time. 
          More importantly, they drive resolution rates up to an average of 80%, and cost per interaction down.
        </p>
        <Button styles={`mt-10`}/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )

export default Business;