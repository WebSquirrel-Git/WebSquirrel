'use client';
import CloseButton from '@/components/Ui/Buttons/CloseButton/CloseButton';
import styles from './navMenu.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-logo-and-name.svg';
import EmailIcon from '@/public/assets/icons/mail-icon.svg';
import PhoneIcon from '@/public/assets/icons/phone-icon.svg';
import Link from 'next/link';

interface NavMenuPropsType {
  hideMenuHandler: () => void;
  showMenu: boolean;
}

const NavMenu = ({hideMenuHandler, showMenu}: NavMenuPropsType) => {
  return (
    <div
      className={`${styles.container} ${showMenu && styles.containerActive}`}
    >
      <div className={`${styles.header} ${showMenu && styles.active}`}>
        <img src={Logo.src} className={styles.logo} />
        <CloseButton onClick={hideMenuHandler} />
      </div>
      <div className={`${styles.listBox} ${showMenu && styles.active}`}>
        <Link href="/" className={styles.listItem}>
          STRONA GŁÓWNA
        </Link>
        <Link href="/" className={styles.listItem}>
          STRONY I SKLEPY INTERNETOWE
        </Link>
        <Link href="/" className={styles.listItem}>
          ELEMENTY GRAFICZNE I WIDEO
        </Link>
        <Link href="/" className={styles.listItem}>
          PORTFOLIO
        </Link>
      </div>
      <div className={`${styles.contactBox} ${showMenu && styles.active}`}>
        <span className={styles.contactHeader}>Skontaktuj sie z nami</span>
        <span className={styles.contactItem}>
          <img src={EmailIcon.src} />
          websquirrelcontact@gmail.com
        </span>
        <span className={styles.contactItem}>
          <img src={PhoneIcon.src} />
          +48 728 327 596
        </span>
      </div>
    </div>
  );
};

export default NavMenu;
