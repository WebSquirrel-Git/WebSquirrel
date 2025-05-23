'use client';
import styles from './footer.module.scss';
import CompanyName from '@/public/assets/logo/WebSquirrel-name.svg';
import Logo from '@/public/assets/logo/WebSquirrel-logo-sm.svg';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

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
      </div>
      <div className={styles.listColumn}>
        <span className={styles.listTitle}>Kontakt</span>
        <span className={styles.link}>
          E-mail: websquirrelcontact@gmail.com
        </span>
        <span className={styles.link}>Telefon: +48 728 327 596</span>
        <span className={styles.link}>NIP: 9452306825</span>
        <span className={styles.link}>REGON: 541013883</span>
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
