import Link from 'next/link';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

const Header = () => {
    const { pathname } = useRouter();

    return <header className={styles.header}>
        <Link href='/' className={pathname === '/' ? styles.active : ''}>Home</Link>
        <Link href='/jobs' className={pathname === '/jobs' ? styles.active : ''}>Jobs</Link>
    </header>
}

export default Header;