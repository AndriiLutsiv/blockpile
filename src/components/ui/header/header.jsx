import { useState } from 'react';
import Image from 'next/image';
import logo from './images/logo.svg';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Header = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} width={297} alt="logo" />
        </div>
        <div onClick={toggleMenu} className={classNames(styles.burger, { [styles.open]: open })}>
          <div className={styles.bar} />
        </div>
        <div className={classNames(styles.headerItems, {[styles.open]: open})}>
          <div className={styles.headerItem}>About</div>
          <div className={styles.headerItem}>Case Studies</div>
          <div className={styles.headerItem}>Clients</div>
          <div className={styles.headerItem}>Contact</div>
          <button className={styles.headerButton}>Start Project</button>
          <div className={styles.cross} onClick={toggleMenu}/>
        </div>
      </div>
      {open && <div className={styles.backdrop} onClick={toggleMenu}></div>}

    </header>
  );
};

export default Header;
