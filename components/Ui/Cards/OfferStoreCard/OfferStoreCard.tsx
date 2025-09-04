'use client';
import Link from 'next/link';
import styles from './offerStoreCard.module.scss';
import ArrowIconOrange from '@/public/assets/icons/chevron-forward-circle-orange-icon.svg';
import ClockIconOrange from '@/public/assets/icons/clock-orange-icon.svg';
import CheckmarkIcon from '@/public/assets/icons/checkmark-green-icon.svg';
import WoocommerceIcon from '@/public/assets/icons/woocommerce-orange-icon.svg';
export interface OfferStoreCardPropsType {
  type: string;
  title: string;
  price: string;
  time: string;
  url: string;
  mainList: string[];
  woocommerceList: string[];
}

const OfferStoreCard = ({
  type,
  title,
  price,
  time,
  url,
  mainList,
  woocommerceList,
}: OfferStoreCardPropsType) => {
  const mainListMap = (
    <div className={styles.listBox}>
      {mainList.map((item, index) => (
        <div key={index} className={styles.listItem}>
          <img src={CheckmarkIcon.src} alt="checkmark" width={24} height={24} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );

  const wordpressListMap =
    woocommerceList.length > 0 ? (
      <div className={styles.listBox}>
        <div className={styles.listHeader}>
          <img
            src={WoocommerceIcon.src}
            alt="woocommerce"
            width={30}
            height={30}
          />
          <p>Wykonanie w WooCommerce:</p>
        </div>
        {woocommerceList.map((item, index) => (
          <div key={index} className={styles.listItem}>
            <img
              src={CheckmarkIcon.src}
              alt="checkmark"
              width={24}
              height={24}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    ) : null;

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h3>
          {type} <br />
          <span className={styles.header}>{title}</span>
        </h3>
        <span className={styles.price}>{price}</span>
        <div className={styles.timeBox}>
          <img src={ClockIconOrange.src} alt="clock" width={30} height={30} />
          <p>{time}</p>
        </div>
        {mainListMap}
        {wordpressListMap}
      </div>
      <Link className={styles.link} href='#contact'>
        DARMOWA KONSULTACJA{' '}
        <img
          src={ArrowIconOrange.src}
          alt="forwardIcon"
          title="forwardIcon"
          width={19}
          height={19}
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default OfferStoreCard;
