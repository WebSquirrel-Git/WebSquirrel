'use client';
import styles from './closeButton.module.scss';
import CloseIcon from '@/public/assets/icons/close-icon.svg';

interface CloseButtonPropsType {
  onClick: () => void;
}

const CloseButton = ({onClick}: CloseButtonPropsType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img className={styles.icon} src={CloseIcon.src} />
    </button>
  );
};

export default CloseButton;
