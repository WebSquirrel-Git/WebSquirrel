'use client';
import Link from 'next/link';
import styles from './offerCard.module.scss';
import ArrowIconOrange from '@/public/assets/icons/chevron-forward-circle-orange-icon.svg';
import ArrowIconBlue from '@/public/assets/icons/chevron-forward-circle-blue-icon.svg';

interface OfferCardPropsType {
  type: string;
  title: string;
  price: string;
  description: string;
  url: string;
  color: 'orange' | 'blue';
  link: boolean;
}

const ICONS = {
  orange: ArrowIconOrange,
  blue: ArrowIconBlue,
};

const OfferCard = ({
  type,
  title,
  price,
  description,
  url,
  color,
  link,
}: OfferCardPropsType) => {
  const containerStyle =
    color === 'orange'
      ? styles.container
      : `${styles.container} ${styles[`container${color}`]}`;
  const priceStyle =
    color === 'orange' ? styles.price : `${styles.price} ${styles[color]}`;
  const headerStyle =
    color === 'orange'
      ? styles.headerOrange
      : `${styles.headerOrange} ${styles[color]}`;
  const linkStyle =
    color === 'orange'
      ? styles.link
      : `${styles.link} ${styles[`link${color}`]}`;
  const icon = ICONS[color];

  return (
    <div className={containerStyle}>
      <div className={styles.contentBox}>
        <h3>
          {type} <br />
          <span className={headerStyle}>{title}</span>
        </h3>
        <div className={styles.priceBox}>
          <span className={styles.priceLabel}>Cena:</span>
          <span className={priceStyle}>{price}</span>
        </div>
        <span className={styles.description}>{description}</span>
      </div>
      {link && (
        <Link className={linkStyle} href={url}>
          DOWIEDZ SIĘ WIĘCEJ <img src={icon.src} />
        </Link>
      )}
    </div>
  );
};

export default OfferCard;
