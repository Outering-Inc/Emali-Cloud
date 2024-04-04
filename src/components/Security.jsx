import { security } from "../assets";
import styles, { layout } from "../style";

const Security = ({ backgroundClass }) =>  (
    <section id="product" className={`${layout.sectionReverse} ${backgroundClass} w-full ` }>
    <div className={layout.sectionImgReverse}>
      <img src={security} alt="hospitality" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={`${layout.sectionInfo} w-full`}>
      <h1 className={styles.heading4}>
        Security & Compliance
      </h1>
      <h2 className={styles.heading1}>
        Your customers' privacy is our<br className="sm:block hidden"/> first priority
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
        Emali Cloud is committed to the preservation, protection and due use of personal data.
        Our platform is designed to ensure the privacy and security of end users while using our services. 
        As a company committed to the security of our client's personal data, we implement and maintain physical,
        administrative and technical controls to safeguard data while in transit and at rest.
      </p>

    </div>
  </section>
  );

export default Security;