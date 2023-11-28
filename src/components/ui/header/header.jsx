import { useState } from 'react';
import Image from 'next/image';
import logo1 from './images/Logo.png';
import logo2 from './images/block.png';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isButtonContentHidden, setButtonContentHidden] = useState(false);

  const toggleBurgerMenu = () => {
    console.log('Toggle burger menu');
    setBurgerMenuOpen(!isBurgerMenuOpen);
    setButtonContentHidden(!isButtonContentHidden);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
    setButtonContentHidden(false);
  };

  return (
    <div className={styles.sectionHeader}>
      <div className={styles.container}>
        <div className={styles.boxHeader}>
          <div className={styles.logo}>
            <Image src={logo1} alt="Image" layout="responsive" />
            <Image src={logo2} alt="Image" layout="responsive" />
          </div>
          <div className={styles.headerSearch}>
            <div
              className={`${styles.burgerMenu} ${isBurgerMenuOpen ? styles.open : ''}`}
              onClick={toggleBurgerMenu}
              aria-hidden="true"
            >
              <div className={styles.bar} />
              <div className={styles.bar} />
              <div className={styles.bar} />
            </div>
            {isBurgerMenuOpen ? (
              <ul className={styles.menuOpen}>
                <li onClick={closeBurgerMenu}>About</li>
                <li onClick={closeBurgerMenu}>Case Studies</li>
                <li onClick={closeBurgerMenu}>Clients</li>
                <li onClick={closeBurgerMenu}>Contact</li>
                <li onClick={closeBurgerMenu}>
                  <button>Start Project</button>
                </li>
              </ul>
            ) : (
              <div className={styles.headerButton} style={{ display: isButtonContentHidden ? 'none' : 'block' }}>
                <button>Start Project</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
