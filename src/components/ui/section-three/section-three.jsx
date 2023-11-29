import styles from './section-three.module.scss';
import picture from './images/pictureThreeSection.png';
import Image from 'next/image';

const SectionThree = () => {
    return <div className={styles.sectionThree}>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={picture} alt="picture" />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.title}>Were blockchain development experts passionate about building for communities</h2>
                <p className={styles.textItem}>As Web3 natives we understand at a fundamental level what the end user experiences and expects.</p>
                <p className={styles.textItem}> We help businesses to implement Web3 solutions that align with the culture that demands interacting with NFTs and beyond.</p>
                <p className={styles.textItem}>With over 5 years of experience our expertise ensures we create solutions for the long term. </p>
            </div>
        </div>
    </div >
}

export default SectionThree;