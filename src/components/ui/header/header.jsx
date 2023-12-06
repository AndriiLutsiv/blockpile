import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from './images/logo.svg';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from "next/link";

const Header = () => {
  const { pathname, query, push } = useRouter();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const handleStartProjectClick = () => {
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
            onClick={() => scrollToSection('our-services-section')}
            className={styles.headerItem}
          >
            About
          </div>
          <div
            onClick={() => scrollToSection('case-studies-section')}
            className={styles.headerItem}
          >
            Case Studies
          </div>
          <div
            onClick={() => scrollToSection('testimonials-section')}
            className={styles.headerItem}
          >
            Clients
          </div>
          <div
            onClick={() => scrollToSection('footer')}
            className={styles.headerItem}
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
