'use client';
import NavButton from '@/components/Ui/Buttons/NavButton/NavButton';
import styles from './navBar.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-logo-and-name.svg';
import Link from 'next/link';

interface NavBarPropsType {
  showMenuHandler: () => void;
}

const NavBar = ({showMenuHandler}: NavBarPropsType) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img src={Logo.src} className={styles.logo} />
      </Link>
      <div className={styles.buttonsBox}>
        <NavButton onClick={showMenuHandler} />
      </div>
    </div>
  );
};

export default NavBar;
