'use client';
import styles from './popup.module.scss';
import CloseCircleOrangeIcon from '@/public/assets/icons/close-circle-orange-icon.svg';
import CloseCircleBlueIcon from '@/public/assets/icons/close-circle-blue-icon.svg';

interface PopupPropsType {
  onClosePopup: () => void;
}

const Popup = ({onClosePopup}: PopupPropsType) => {
  return (
    <div className={styles.layout} onClick={onClosePopup}>
      <div className={styles.container}>
        <button className={styles.closeIconBox}>
          <img src={CloseCircleOrangeIcon.src} />
        </button>
        <span className={styles.title}>NEMO Sportowa Przygoda</span>
      </div>
    </div>
  );
};
export default Popup;
