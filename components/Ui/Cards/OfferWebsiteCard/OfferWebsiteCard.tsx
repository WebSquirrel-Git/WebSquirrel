'use client';
import Link from 'next/link';
import styles from './offerWebsiteCard.module.scss';
import ArrowIconOrange from '@/public/assets/icons/chevron-forward-circle-orange-icon.svg';
import ClockIconOrange from '@/public/assets/icons/clock-orange-icon.svg';
import CheckmarkIcon from '@/public/assets/icons/checkmark-green-icon.svg';
import CloseRedIcon from '@/public/assets/icons/close-red-icon.svg';
import WordpressIcon from '@/public/assets/icons/wordpress-orange-icon.svg';
import NextJsIcon from '@/public/assets/icons/next-js-icon.svg';
import PayloadCMSIcon from '@/public/assets/icons/payloadcms-orange-icon.svg';

export interface OfferWebsiteCardPropsType {
  type: string;
  title: string;
  price: string;
  time: string;
  url: string;
  mainList: string[];
  wordpressList: string[];
  nextJsList: {type: 'check' | 'false'; value: string}[];
  payloadCMSList: {type: 'check' | 'false'; value: string}[];
}

const OfferWebsiteCard = ({
  type,
  title,
  price,
  time,
  mainList,
  wordpressList,
  nextJsList,
  payloadCMSList,
}: OfferWebsiteCardPropsType) => {
  const mainListMap =
    nextJsList.length < 6 ? (
      <div className={styles.listBox}>
        {mainList.map((item, index) => (
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
    ) : (
      <div className={styles.listBox}>
        <Link href="#nextjs" className={styles.listHeader}>
          <img src={NextJsIcon.src} alt="nextJs" width={30} height={30} />
          <p>Wykonanie w NextJS:</p>
        </Link>
        {nextJsList.map((item, index) => (
          <div key={index} className={styles.listItem}>
            <img
              src={item.type === 'check' ? CheckmarkIcon.src : CloseRedIcon.src}
              alt="checkmark"
              width={24}
              height={24}
            />
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    );

  const wordpressListMap =
    wordpressList.length > 0 ? (
      <div className={styles.listBox}>
        <Link href="#wordpress" className={styles.listHeader}>
          <img src={WordpressIcon.src} alt="wordpress" width={30} height={30} />
          <p>Wykonanie w Wordpress:</p>
        </Link>
        {wordpressList.map((item, index) => (
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

  const nextJsListMap =
    nextJsList.length < 10 && nextJsList.length > 0 ? (
      <div className={styles.listBox}>
        <Link href="#nextjs" className={styles.listHeader}>
          <img src={NextJsIcon.src} alt="nextJs" width={30} height={30} />
          <p>Wykonanie w NextJS:</p>
        </Link>
        {nextJsList.map((item, index) => (
          <div key={index} className={styles.listItem}>
            <img
              src={item.type === 'check' ? CheckmarkIcon.src : CloseRedIcon.src}
              alt="checkmark"
              width={24}
              height={24}
            />
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    ) : null;
  const payloadCMSListMap =
    payloadCMSList.length < 10 && payloadCMSList.length > 0 ? (
      <div className={styles.listBox}>
        <Link href="#payloadcms" className={styles.listHeader}>
          <img
            src={PayloadCMSIcon.src}
            alt="payloadCMS"
            width={30}
            height={30}
          />
          <p>Wykonanie w PayloadCMS:</p>
        </Link>
        {payloadCMSList.map((item, index) => (
          <div key={index} className={styles.listItem}>
            <img
              src={item.type === 'check' ? CheckmarkIcon.src : CloseRedIcon.src}
              alt="checkmark"
              width={24}
              height={24}
            />
            <p>{item.value}</p>
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
        {nextJsListMap}
        {payloadCMSListMap}
      </div>
      <Link className={styles.link} href="#contact">
        BEZPŁATNA KONSULTACJA{' '}
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

export default OfferWebsiteCard;
