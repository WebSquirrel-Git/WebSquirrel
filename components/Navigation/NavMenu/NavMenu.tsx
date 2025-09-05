'use client';
import CloseButton from '@/components/Ui/Buttons/CloseButton/CloseButton';
import styles from './navMenu.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-logo-and-name.svg';
import EmailIcon from '@/public/assets/icons/mail-icon.svg';
import PhoneIcon from '@/public/assets/icons/phone-icon.svg';
import InstagramIcon from '@/public/assets/icons/instagram-orange-icon.svg';
import FacebookIcon from '@/public/assets/icons/facebook-orange-icon.svg';
import BehanceIcon from '@/public/assets/icons/behance-orange-icon.svg';
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
        <img
          src={Logo.src}
          className={styles.logo}
          alt="websquirrelLogo"
          title="websquirrelLogo"
          width={221}
          height={48}
          loading="eager"
        />
        <CloseButton onClick={hideMenuHandler} />
      </div>
      <div className={`${styles.listBox} ${showMenu && styles.active}`}>
        <Link onClick={hideMenuHandler} href="/" className={styles.listItem}>
          STRONA GŁÓWNA
        </Link>
        <Link
          onClick={hideMenuHandler}
          href="/oferta/strony-internetowe"
          className={styles.listItem}
        >
          STRONY INTERNETOWE
        </Link>
        <Link
          onClick={hideMenuHandler}
          href="/oferta/sklepy-internetowe"
          className={styles.listItem}
        >
          SKLEPY INTERNETOWE
        </Link>
        <Link
          onClick={hideMenuHandler}
          href="/oferta#offert"
          className={styles.listItem}
        >
          ELEMENTY GRAFICZNE I WIDEO
        </Link>
        <Link
          onClick={hideMenuHandler}
          href="/portfolio"
          className={styles.listItem}
        >
          PORTFOLIO
        </Link>
        <Link
          onClick={hideMenuHandler}
          href="/artykuly"
          className={styles.listItem}
        >
          ARTYKUŁY
        </Link>
      </div>
      <div className={`${styles.contactBox} ${showMenu && styles.active}`}>
        <span className={styles.contactHeader}>Skontaktuj sie ze mną</span>
        <span className={styles.contactItem}>
          <img
            src={EmailIcon.src}
            alt="emailIcon"
            title="emailIcon"
            width={24}
            height={24}
            loading="eager"
          />
          websquirrelcontact@gmail.com
        </span>
        <span className={styles.contactItem}>
          <img
            src={PhoneIcon.src}
            alt="phoneIcon"
            title="phoneIcon"
            width={24}
            height={24}
            loading="eager"
          />
          +48 728 327 596
        </span>
        <a
          href="https://www.instagram.com/websquirrel_ig/"
          className={styles.contactItem}
        >
          <img
            src={InstagramIcon.src}
            alt="instagramIcon"
            title="instagramIcon"
            width={24}
            height={24}
            loading="eager"
          />
          websquirrel_ig
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575250722548"
          className={styles.contactItem}
        >
          <img
            src={FacebookIcon.src}
            alt="facebookIcon"
            title="facebookIcon"
            width={24}
            height={24}
            loading="eager"
          />
          WebSquirrel
        </a>
        <a
          href="https://www.behance.net/websquirrel"
          className={styles.contactItem}
        >
          <img
            src={BehanceIcon.src}
            alt="behanceIcon"
            title="behanceIcon"
            width={24}
            height={24}
            loading="eager"
          />
          websquirrel
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
