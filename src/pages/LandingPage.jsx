import React from 'react'
import styles from '../style';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Testimonials, Hero, Analytics, Security, Support, Intergration, Action } from '../components';
const LandingPage = () =>  (
    <div className="bg-white w-full overflow-hidden w-[100%] m-auto">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    
    <div className={`bg-primary w-full overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
        <Analytics />
        <Business />
        <Billing />
        <CardDeal />
        <Security backgroundClass={styles.bgOrange}/>
        <Support />
        <Intergration />
        
        <Action />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
    </div>
  );

export default LandingPage;