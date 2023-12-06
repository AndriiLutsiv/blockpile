import Image from 'next/image';
import styles from './footer.module.scss';
import logo1 from './images/Logo.png'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Footer = () => {
    const { pathname, query, push } = useRouter();

    const handleEmailClick = () => {
        const email = 'info@blockpile.com';
        const subject = 'Project Inquiry';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink, '_blank');
    };

    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            push(`/?scrollTo=${sectionId}`);
        }
    };

    useEffect(() => {
        const { scrollTo } = query;
        if (scrollTo) {
            const target = document.getElementById(scrollTo);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
    }, [query, pathname]);

    return <div id='footer' className={styles.sectionFooter}>
        <div className={styles.container}>
            <div className={styles.footerBox}>
                <div className={styles.logoRow}>
                    <Link href={`/`} className={styles.footerLogo}>
                        <Image
                            src={logo1}
                            alt="Image"
                            layout="responsive"
                        />
                    </Link>
                    <div className={styles.footerSearch}>
                        <ul className={styles.contact}>
                            <li onClick={handleEmailClick}>Contact</li>
                            <li onClick={handleEmailClick}>info@blockpile.xyz</li>
                            <li>Twitter</li>
                        </ul>
                        <ul>
                            <li>
                                <Link href={`/`} className={styles.logo}>Home</Link>
                            </li>
                            <li onClick={() => scrollToSection('our-services-section')}>About</li>
                            <li onClick={() => scrollToSection('our-services-section')}>Services</li>
                            <li onClick={() => scrollToSection('case-studies-section')}>Case Studies</li>
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