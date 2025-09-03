'use client';
import Link from 'next/link';
import styles from './portfolioShortCard.module.scss';
import DefaultLink from '../../Links/DefaultLink/DefaultLink';
import {StaticImageData} from 'next/image';

export interface PortfolioShortCardProps {
  header: string;
  about: string;
  subheader:string;
  website_url: string;
  website_name: string;
  imgPhone: StaticImageData;
  imgPc:StaticImageData;
  imgBg:StaticImageData;
  logo: StaticImageData;
  portfolio_url: string;
}

const PortfolioShortCard = ({
  header,
  about,
  subheader,
  imgBg,
  portfolio_url,
}: PortfolioShortCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.topBox}>
    
        <h3>{header}</h3>
        <h4>{subheader}</h4>
        
        </div>
        <div className={`${styles.bottomBox} ${styles.pc}`}>
<p>{about}</p>
<DefaultLink name="Dowiedz się więcej" url={portfolio_url} />
        </div>
         
        {/* <Link href={website_url}>{website_name}</Link> */}
      </div>
      
        <img
        src={imgBg.src}
        alt={header}
        className={styles.imageBg}
        width={720}
        height={400}
        loading="lazy"
      />
      <div className={`${styles.bottomBox} ${styles.mobile}`}>
<p>{about}</p>

<DefaultLink name="Dowiedz się więcej" url={portfolio_url} />
        </div>
      
    </div>
  );
};
export default PortfolioShortCard;
