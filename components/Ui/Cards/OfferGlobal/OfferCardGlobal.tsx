'use client';
import Link from 'next/link';
import styles from './offerCardGlobal.module.scss';
import ArrowIconOrange from '@/public/assets/icons/chevron-forward-circle-orange-icon.svg';
import ArrowIconBlue from '@/public/assets/icons/chevron-forward-circle-blue-icon.svg';
import WebsiteIconOrange from '@/public/assets/icons/website-orange-icon.svg';
import ShopIconOrange from '@/public/assets/icons/shop-orange-icon.svg';
import GraphicsIconBlue from '@/public/assets/icons/graphics-blue-icon.svg';
import VideoIconBlue from '@/public/assets/icons/play-blue-icon.svg';
export interface OfferCardPropsType {
  header: string;
  description: string;
  url: string;
  color: 'orange' | 'blue';
  list: string[];
  link: boolean;
  type:
    | 'strona_internetowa'
    | 'sklep_internetowy'
    | 'projekt_graficzny'
    | 'montaz_rolek';
}

const ICONS = {
  orange: ArrowIconOrange,
  blue: ArrowIconBlue,
  strona_internetowa: WebsiteIconOrange,
  sklep_internetowy: ShopIconOrange,
  projekt_graficzny: GraphicsIconBlue,
  montaz_rolek: VideoIconBlue,
};

const OfferCardGlobal = ({
  header,
  description,
  url,
  color,
  link,
  type,
  list,
}: OfferCardPropsType) => {
  const containerStyle =
    color === 'orange'
      ? styles.container
      : `${styles.container} ${styles[`container${color}`]}`;

  const linkStyle =
    color === 'orange'
      ? styles.link
      : `${styles.link} ${styles[`link${color}`]}`;
  const accentStyle = color === 'orange' ? styles.orange : styles.blue;
  const icon = ICONS[color];
  const topIcon = ICONS[type];
  return (
    <div className={containerStyle}>
      <div className={styles.headerBox}>
        <img src={topIcon.src} alt={type} className={styles.topIcon} />
        <h3>{header}</h3>
      </div>
      <div className={styles.list}>
        {list.map((item, index) => (
          <h3 key={index}>
            <span className={accentStyle}>0{(index += 1)} </span>
            {item}
          </h3>
        ))}
      </div>
      <div className={styles.bottomBox}>
        <span className={styles.description}>{description}</span>
        {link && (
          <Link className={linkStyle} href={url}>
            DOWIEDZ SIĘ WIĘCEJ{' '}
            <img
              src={icon.src}
              alt="forwardIcon"
              title="forwardIcon"
              width={19}
              height={19}
              loading="eager"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default OfferCardGlobal;
