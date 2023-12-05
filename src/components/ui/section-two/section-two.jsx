import styles from './section-two.module.scss'
import icon1 from './images/999.svg'
import icon2 from './images/888.svg'
import icon3 from './images/777.svg'
import Image from 'next/image';

const SectionTwo = () => {
    return <div className={styles.sectionTwo}>
        <div className={styles.sectionBoxTwo}>
            <div className={styles.container}>
                <h3 id='our-serveces-section' className={styles.heading3}>Our services</h3>
                <div className={styles.rowTwo}>
                    <div className={styles.coll3}>
                        <div className={styles.titleImg}>
                            <Image
                                src={icon1}
                                alt="icon1"
                              
                            />
                        </div>
                        <h4 className={styles.heading4}>Advisory</h4>
                        <p className={styles.title}>We provide strategy from a birdseye perspective to account for high-level insight and follow through with attention to detail for consistency. Guiding you through the process at every step of the way.</p>
                    </div>
                    <div className={styles.coll3}>
                        <div className={styles.titleImg}>
                            <Image
                                src={icon2}
                                alt="icon2"
                               
                            />
                        </div>
                        <h4 className={styles.heading4}>Development</h4>
                        <p className={styles.title}>Our developers follow best practice and are leading smart contract creators in the space. Having both the technical ability and an innovative approach with functionality and security top of mind.</p>
                    </div>
                    <div className={styles.coll3}>
                        <div className={styles.titleImg}>
                            <Image
                                src={icon3}
                                alt="icon3"
                                
                            />
                        </div>
                        <h4 className={styles.heading4}>Implementation</h4>
                        <p className={styles.title}>Creating an experience doesn’t stop at an idea or a smart contract. You need a website or application that will integrate seamlessly with Web3 technology and provide a front-end to interact with.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SectionTwo;