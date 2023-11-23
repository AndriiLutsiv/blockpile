import styles from './section-three.module.scss';
import picture from './images/pictureThreeSection.png';
import Image from 'next/image';

const SectionThree = () => {
    return <div className={styles.sectionThree}>
        <div className={styles.container}>
            <div className={styles.sectionBoxThree}>
                <div className={styles.rowThree}>
                    <div className={styles.coll2}>
                        <div className={styles.boxImg}>
                            <Image
                                src={picture}
                                alt="picture"
                                width={90}
                                height={90}
                                layout="responsive"
                            />
                        </div>
                    </div>
                    <div className={styles.coll2}>
                        <div className={styles.boxContentThree}>
                            <h2 className={styles.headingTitle}>Were blockchain development experts passionate about building for communities</h2>
                            <p className={styles.title}>As Web3 natives we understand at a fundamental level what the end user experiences and expects.</p>
                            <p className={styles.title}> We help businesses to implement Web3 solutions that align with the culture that demands interacting with NFTs and beyond.</p>
                            <p className={styles.title}>With over 5 years of experience our expertise ensures we create solutions for the long term. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default SectionThree;