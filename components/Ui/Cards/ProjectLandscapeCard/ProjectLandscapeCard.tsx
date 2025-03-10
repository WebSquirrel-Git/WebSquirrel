'use client';
import {
  FilterPortfolioType,
  PortfolioProjectStyleType,
} from '@/components/Portfolio/Filter/Filter';
import styles from './projectLandscapeCard.module.scss';
import OpenOrangeIcon from '@/public/assets/icons/open-orange-icon.svg';
import OpenBlueIcon from '@/public/assets/icons/open-blue-icon.svg';
import Popup from '@/components/Portfolio/Popup/Popup';
import {useState} from 'react';

export interface ProjectLandscapeCardPropsType {
  title: string;
  type: FilterPortfolioType;
  typeTitle: string;
  mainTechnology: string;
  coverImage: any;
  active: boolean;
  style: PortfolioProjectStyleType;
}

const ProjectLandscapeCard = ({
  title,
  type,
  typeTitle,
  mainTechnology,
  coverImage,
  active,
  style,
}: ProjectLandscapeCardPropsType) => {
  const [popupActive, setPopupActive] = useState(false);

  const openIcon = style === 'graphic' ? OpenBlueIcon.src : OpenOrangeIcon.src;
  const containerStyles =
    style === 'graphic'
      ? `${styles.container} ${styles.blue}`
      : styles.container;
  const iconBoxStyles =
    style === 'graphic' ? `${styles.iconBox} ${styles.blue}` : styles.iconBox;

  const openPopupHandler = () => {
    setPopupActive(true);
  };

  const closePopupHandler = () => {
    setPopupActive(false);
  };

  return (
    <>
      <button
        onClick={openPopupHandler}
        className={containerStyles}
        style={{backgroundImage: `url(${coverImage})`}}
      >
        <h3>{title}</h3>
        <div className={styles.categoryBox}>
          <p>
            <b>{typeTitle}</b>
          </p>
          <p>{mainTechnology}</p>
        </div>

        <span className={iconBoxStyles}>
          <img src={openIcon} />
        </span>
      </button>
      {popupActive && <Popup onClosePopup={closePopupHandler} />}
    </>
  );
};
export default ProjectLandscapeCard;
