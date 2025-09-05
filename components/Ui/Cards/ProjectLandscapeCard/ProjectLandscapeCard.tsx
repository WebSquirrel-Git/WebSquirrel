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
import {PortfolioPopupType} from '@/utils/portfolio/projects';
import Link from 'next/link';

export interface ProjectLandscapeCardPropsType {
  title: string;
  type: FilterPortfolioType;
  typeTitle: string;
  mainTechnology: string;
  coverImage: string;
  active: boolean;
  style: PortfolioProjectStyleType;
  popup: PortfolioPopupType;
  displayType: 'Popup' | 'Website';
  url: string;
}

const ProjectLandscapeCard = ({
  title,
  type,
  typeTitle,
  mainTechnology,
  coverImage,
  style,
  popup,
  displayType,
  url,
}: ProjectLandscapeCardPropsType) => {
  const [popupActive, setPopupActive] = useState(false);

  const openIcon = style === 'graphic' ? OpenBlueIcon.src : OpenOrangeIcon.src;
  const titleStyles = style === 'graphic' ? styles.blue : '';
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

  if (displayType === 'Popup') {
    return (
      <>
        <button
          onClick={openPopupHandler}
          className={containerStyles}
          style={{backgroundImage: `url(${coverImage})`}}
        >
          <h3 className={titleStyles}>{title}</h3>
          <div className={styles.categoryBox}>
            <p>
              <b>{typeTitle}</b>
            </p>
            <p>{mainTechnology}</p>
          </div>

          <span className={iconBoxStyles}>
            <img
              src={openIcon}
              alt="openIcon"
              title="openIcon"
              loading="eager"
              width={24}
              height={24}
            />
          </span>
        </button>
        {popupActive && (
          <Popup
            style={style}
            type={type}
            {...popup}
            onClosePopup={closePopupHandler}
          />
        )}
      </>
    );
  }
  if (displayType === 'Website') {
    return (
      <Link
        href={url}
        className={containerStyles}
        style={{backgroundImage: `url(${coverImage})`}}
      >
        <h3 className={titleStyles}>{title}</h3>
        <div className={styles.categoryBox}>
          <p>
            <b>{typeTitle}</b>
          </p>
          <p>{mainTechnology}</p>
        </div>

        <span className={iconBoxStyles}>
          <img
            src={openIcon}
            alt="openIcon"
            title="openIcon"
            loading="eager"
            width={24}
            height={24}
          />
        </span>
      </Link>
    );
  }
};
export default ProjectLandscapeCard;
