'use client';
import styles from './popup.module.scss';
import CloseCircleOrangeIcon from '@/public/assets/icons/close-circle-orange-icon.svg';
import CloseCircleBlueIcon from '@/public/assets/icons/close-circle-blue-icon.svg';
import ForwardCircleOrangeIcon from '@/public/assets/icons/chevron-forward-circle-orange-icon.svg';
import ForwardCircleBlueIcon from '@/public/assets/icons/chevron-forward-circle-blue-icon.svg';
import BackCircleOrangeIcon from '@/public/assets/icons/chevron-back-circle-orange-icon.svg';
import BackCircleBlueIcon from '@/public/assets/icons/chevron-back-circle-blue-icon.svg';
import {PortfolioPopupType} from '@/utils/portfolio/projects';
import {useState} from 'react';
import {FilterPortfolioType, PortfolioProjectStyleType} from '../Filter/Filter';

export interface PopupPropsType extends PortfolioPopupType {
  onClosePopup: () => void;
  style: PortfolioProjectStyleType;
  type: FilterPortfolioType;
}

const Popup = ({
  onClosePopup,
  title,
  description,
  technologiesIcons,
  url,
  frontImages,
  reverseImages,
  style,
  type,
}: PopupPropsType) => {
  const containerStyles =
    style === 'graphic'
      ? `${styles.container} ${styles.blue}`
      : styles.container;
  const closeIconBoxStyles =
    style === 'graphic'
      ? `${styles.closeIconBox} ${styles.closeIconBoxBlue}`
      : styles.closeIconBox;
  const navButtonsBoxStyles =
    style === 'graphic'
      ? `${styles.navButtonsBox} ${styles.navButtonsBoxBlue}`
      : styles.navButtonsBox;
  const titleStyles =
    style === 'graphic' ? `${styles.title} ${styles.blue}` : styles.title;
  const subHeaderStyles =
    style === 'graphic'
      ? `${styles.subHeader} ${styles.blue}`
      : styles.subHeader;
  const imgBorderStyles =
    style === 'graphic' ? styles.imgBlueBorder : styles.imgOrangeBorder;

  const backCircleIcon =
    style === 'graphic' ? BackCircleBlueIcon : BackCircleOrangeIcon;
  const forwardCircleIcon =
    style === 'graphic' ? ForwardCircleBlueIcon : ForwardCircleOrangeIcon;
  const closeCircleIcon =
    style === 'graphic' ? CloseCircleBlueIcon : CloseCircleOrangeIcon;

  const [showReverse, setShowReverse] = useState(false);

  const showReverseHandler = () => {
    setShowReverse(true);
  };
  const showFrontHandler = () => {
    setShowReverse(false);
  };

  return (
    <div className={styles.layout}>
      <div className={containerStyles}>
        <button className={closeIconBoxStyles} onClick={onClosePopup}>
          <img src={closeCircleIcon.src} alt="closeCircleIcon" />
        </button>
        <div className={navButtonsBoxStyles}>
          <div className={styles.buttonsBox}>
            <button className={styles.button} onClick={showFrontHandler}>
              <img src={backCircleIcon.src} alt="backCircleIcon" />
            </button>
            <button className={styles.button} onClick={showReverseHandler}>
              <img src={forwardCircleIcon.src} alt="forwardCircleIcon" />
            </button>
          </div>
        </div>
        <span className={titleStyles}>{title}</span>
        {!showReverse && (
          <div className={styles.frontBox}>
            <div className={styles.contentBox}>
              <span className={subHeaderStyles}>O projekcie</span>
              <p>{description}</p>
              <span className={subHeaderStyles}>Użyte technologie</span>
              <div className={styles.iconsBox}>
                {technologiesIcons.map((icon, index) => (
                  <img src={icon.src} key={index} alt="technologyIcon" />
                ))}
              </div>

              {url && (
                <>
                  <span className={subHeaderStyles}>Strona internetowa</span>{' '}
                  <a href={'https://' + url}>{'www.' + url}</a>
                </>
              )}
            </div>
            <div className={styles.imageBox}>
              {type !== 'reel' &&
                type !== 'animation' &&
                frontImages.map((image, index) => (
                  <img
                    className={imgBorderStyles}
                    src={image.src}
                    key={index}
                    alt="projectCover"
                  />
                ))}
              {(type == 'reel' || type == 'animation') &&
                frontImages.map((video, index) => (
                  <video
                    className={imgBorderStyles}
                    key={index}
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  ></video>
                ))}
            </div>
          </div>
        )}
        {showReverse && (
          <>
            <div className={styles.reverseBox}>
              {type !== 'reel' &&
                type !== 'animation' &&
                reverseImages.map((image, index) => (
                  <img
                    className={imgBorderStyles}
                    src={image.src}
                    key={index}
                    alt="projectDemo"
                  />
                ))}
              {(type == 'reel' || type == 'animation') &&
                reverseImages.map((video, index) => (
                  <video
                    className={imgBorderStyles}
                    key={index}
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  ></video>
                ))}
            </div>
            <div className={styles.reverseBoxSm}>
              {type !== 'reel' &&
                type !== 'animation' &&
                frontImages.map((image, index) => (
                  <img
                    className={imgBorderStyles}
                    src={image.src}
                    key={index}
                    alt="projectDemo"
                  />
                ))}
              {(type == 'reel' || type == 'animation') &&
                reverseImages.map((video, index) => (
                  <video
                    className={imgBorderStyles}
                    key={index}
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  ></video>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
