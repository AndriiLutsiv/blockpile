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

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProjectClick = () => {
    const email = 'info@blockpile.com';
    const subject = 'Project Inquiry';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

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
          <div
            onClick={() => scrollToSection('our-serveces-section')}
            className={classNames(styles.headerItem, { [styles.active]: pathname === '/about' })}
          >
            About
          </div>
          <Link href={`/jobs?page=1&category=0`} className={classNames(styles.headerItem, { [styles.active]: pathname === '/jobs' })}>
            Case Studies
          </Link>
          <div
            onClick={() => scrollToSection('testimonials-section')}
            className={classNames(styles.headerItem, { [styles.active]: pathname === '/clients' })}
          >
            Clients
          </div>
          <div
            onClick={() => scrollToSection('footer')}
            className={classNames(styles.headerItem, { [styles.active]: pathname === '/contact' })}
          >
            Contact
          </div>
          <button onClick={handleStartProjectClick} className={styles.headerButton}>Start Project</button>
          <div className={styles.cross} onClick={toggleMenu} />
        </div>
      </div>
      {open && <div className={styles.backdrop} onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
