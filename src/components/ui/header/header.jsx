import { useState } from 'react';
import Image from 'next/image';
import logo from './images/logo.svg';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from "next/link";

const Header = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={`/`} className={styles.logo}>
          <Image src={logo} width={297} alt="logo" />
        </Link>
        <div onClick={toggleMenu} className={classNames(styles.burger, { [styles.open]: open })}>
          <div className={styles.bar} />
        </div>
        <div className={classNames(styles.headerItems, { [styles.open]: open })}>
          <Link href={`/about`} className={classNames(styles.headerItem, { [styles.active]: pathname === '/about' })}>
            About
          </Link>
          <Link href={`/jobs?page=1&category=0`} className={classNames(styles.headerItem, { [styles.active]: pathname === '/jobs' })}>
            Case Studies
          </Link>
          <Link href={`/clients`} className={classNames(styles.headerItem, { [styles.active]: pathname === '/clients' })}>
            Clients
          </Link>
          <Link href={`/contact`} className={classNames(styles.headerItem, { [styles.active]: pathname === '/contact' })}>
            Contact
          </Link>
          <button className={styles.headerButton}>Start Project</button>
          <div className={styles.cross} onClick={toggleMenu} />
        </div>
      </div>
      {open && <div className={styles.backdrop} onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
