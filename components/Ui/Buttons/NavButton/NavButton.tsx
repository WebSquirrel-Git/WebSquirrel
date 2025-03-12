'use client';
import styles from './navButton.module.scss';
import HamburgerIcon from '@/public/assets/icons/hamburger-menu.svg';

interface NavButtonPropsType {
  onClick: () => void;
}

const NavButton = ({onClick}: NavButtonPropsType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img
        className={styles.icon}
        src={HamburgerIcon.src}
        alt="hamburgerIcon"
        title="hamburgerIcon"
        loading="eager"
        width={41}
        height={41}
      />
    </button>
  );
};

export default NavButton;
