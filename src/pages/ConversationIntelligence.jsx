import React from 'react';
import styles from '../style';
import { Billing, CardDeal, Clients, CTA, Footer, Navbar, Security, Support } from '../components';
const ConversationIntelligence = () =>  (
    <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

  <div className={`bg-primary w-full overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <CardDeal />
      <Support />
      <CardDeal />
      <Security backgroundClass={styles.bgOrange}/>
      <CardDeal />
      <Billing />
     
      <Clients />
      <CTA />
      <Footer />
    </div>
  </div>
    </div>
  );

export default ConversationIntelligence;