import React from 'react';
import styles from '../style';
import JobNavBar from '../components/NavBar/JobNavBar';
import Jobs from '../components/JobDiv/Jobs';
import Search from '../components/SearchDiv/Search';
import Value from '../components/ValueDiv/Value';
import {  CardDeal, CTA, Footer, Navbar} from '../components';
import ValueCTA from '../components/ValueDiv/ValueCTA';

const CareerPage = () =>  (
    <div className="bg-white w-full overflow-hidden w-[85%] m-auto">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

    <div className={`bg-white w-full overflow-hidden ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <JobNavBar/>
            <Search/>
            <Jobs/>
            <Value/>
            <ValueCTA/>
            <CTA />
            <Footer/>
        </div>
    </div>
    </div>
  );


export default CareerPage