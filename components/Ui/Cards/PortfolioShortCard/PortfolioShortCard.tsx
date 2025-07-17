'use client';
import Link from 'next/link';
import styles from './portfolioShortCard.module.scss';
import DefaultLink from '../../Links/DefaultLink/DefaultLink';
import {StaticImageData} from 'next/image';

export interface PortfolioShortCardProps {
  header: string;
  about: string;
  website_url: string;
  website_name: string;
  img: StaticImageData;
  logo: StaticImageData;
  portfolio_url: string;
}

const PortfolioShortCard = ({
  header,
  about,
  website_name,
  website_url,
  img,
  logo,
  portfolio_url,
}: PortfolioShortCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <h3>{header}</h3>
        <Link href={website_url}>{website_name}</Link>
      </div>
      <img
        src={img.src}
        alt={header}
        className={styles.image}
        width={400}
        height={275}
        loading="lazy"
      />
      <div className={styles.bottomBox}>
        <p>{about}</p>
        <img
          src={logo.src}
          alt={about}
          className={styles.logo}
          width={325}
          height={70}
          loading="lazy"
        />
        <DefaultLink name="Dowiedz się więcej" url={portfolio_url} />
      </div>
    </div>
  );
};
export default PortfolioShortCard;
