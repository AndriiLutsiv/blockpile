import styles from './section-one.module.scss'
import arrow from './images/ArrowDown.png'
import Image from 'next/image';
import { MOBILE_SCREEN } from '../../../constants';

const SectionOne = () => {

    const scrollToSectionTwo = () => {
        const target = document.getElementById('our-services-section');
        if (target) {
            const isMobile = window.innerWidth <= MOBILE_SCREEN;
            target.scrollIntoView({ behavior: 'smooth', block: isMobile ? 'start' : 'end' });
        }
    };

    return <div className={styles.sectionOne}>
        <div className={styles.sectionBox}>
            <div className={styles.container}>
                <h3 className={styles.heading3}>Web3 Agency</h3>
                <h1 className={styles.heading1}>Building innovative experiences on the blockchain</h1>
                <div className={styles.arrow} onClick={scrollToSectionTwo}>
                    <Image
                        src={arrow}
                        alt="Arrow"
                        width={60}
                        height={60}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    </div>
}

export default SectionOne;