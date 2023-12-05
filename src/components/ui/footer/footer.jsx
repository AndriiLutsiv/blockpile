import Image from 'next/image';
import styles from './footer.module.scss';
import logo1 from './images/Logo.png'

const Footer = () => {
    return <div id='footer' className={styles.sectionFooter}>
        <div className={styles.container}>
            <div className={styles.footerBox}>
                <div className={styles.logoRow}>
                    <div className={styles.footerLogo}>
                        <Image
                            src={logo1}
                            alt="Image"
                            layout="responsive"
                        />
                    </div>
                    <div className={styles.footerSearch}>
                        <ul className={styles.contact}>
                            <li>Contact</li>
                            <li>info@blockpile.xyz</li>
                            <li>Twitter</li>
                        </ul>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services Case</li>
                            <li>Studies</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.privacy}>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;