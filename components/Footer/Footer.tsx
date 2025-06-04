'use client';
import styles from './footer.module.scss';
import CompanyName from '@/public/assets/logo/WebSquirrel-name.svg';
import Logo from '@/public/assets/logo/WebSquirrel-logo-sm.svg';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import InstagramIcon from '@/public/assets/icons/instagram-orange-icon.svg';
import FacebookIcon from '@/public/assets/icons/facebook-orange-icon.svg';
import BehanceIcon from '@/public/assets/icons/behance-orange-icon.svg';
const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes('portfolio')) return null;
  return (
    <div className={styles.container}>
      <img
        src={CompanyName.src}
        className={styles.logoName}
        alt="websquirrel"
        title="websquirrel"
        width={444}
        height={76}
        loading="lazy"
      />
      <div className={styles.listColumn}>
        <span className={styles.listTitle}>Mapa</span>
        <Link href="/" className={styles.link}>
          Strona główna
        </Link>
        <Link href="/#offerWebsites" className={styles.link}>
          Strony i sklepy internetowe
        </Link>
        <Link href="/#offerGraphics" className={styles.link}>
          Elementy graficzne i wideo
        </Link>
        <Link href="/" className={styles.link}>
          Portfolio
        </Link>
        <Link href="/artykuly" className={styles.link}>
          Artykuły
        </Link>
        <Link
          href="/assets/statues/WebSquirrel_Polityka_prywatności.pdf"
          className={styles.link}
        >
          Polityka prywatności
        </Link>
      </div>
      <div className={styles.listColumn}>
        <span className={styles.listTitle}>Kontakt</span>
        <span className={styles.link}>
          E-mail: websquirrelcontact@gmail.com
        </span>
        <span className={styles.link}>Telefon: +48 728 327 596</span>
        <span className={styles.link}>NIP: 9452306825</span>
        <span className={styles.link}>REGON: 541013883</span>
        <span className={styles.link}>
          <a href="https://www.facebook.com/profile.php?id=61575250722548">
            <img
              src={FacebookIcon.src}
              alt="facebookIcon"
              title="facebookIcon"
              width={24}
              height={24}
              loading="eager"
            />
          </a>
          <a href="https://www.instagram.com/websquirrel_ig/">
            <img
              src={InstagramIcon.src}
              alt="instagramIcon"
              title="instagramIcon"
              width={24}
              height={24}
              loading="eager"
            />
          </a>
          <a href="https://www.behance.net/websquirrel">
            <img
              src={BehanceIcon.src}
              alt="behanceIcon"
              title="behanceIcon"
              width={24}
              height={24}
              loading="eager"
            />
          </a>
        </span>
      </div>
      <img
        src={Logo.src}
        className={styles.logo}
        alt="websquirrelLogo"
        title="websquirrelLogo"
        width={54}
        height={59}
        loading="lazy"
      />
    </div>
  );
};

export default Footer;
