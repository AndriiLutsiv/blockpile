import Link from 'next/link';
import Image from 'next/image';
import logo1 from './images/Logo.png'
import logo2 from './images/block.png'
import styles from './header.module.scss';
import { useRouter } from 'next/router';

const Header = () => {
    const { pathname } = useRouter();

    return <div className={styles.sectionHeader}>
        <div className={styles.container}>
            <div className={styles.boxHeader}>
                <div className={styles.logo}>
                    <Image
                        src={logo1}
                        alt="Image"
                        // width={615}
                        // height={437}
                        layout="responsive"
                    />
                    <Image
                        src={logo2}
                        alt="Image"
                        // width={615}
                        // height={437}
                        layout="responsive"
                    />
                </div>
                <div className={styles.headerSearch}>
                    <ul><li>About</li>
                        <li>Case Studies</li>
                        <li>Clients</li>
                        <li>Contact</li>
                    </ul>
                    <div className={styles.headerButton}><button>Start Project</button></div>
                </div>
            </div>
        </div>
    </div>
}

export default Header;