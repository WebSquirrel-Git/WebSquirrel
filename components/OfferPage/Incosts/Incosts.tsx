'use client';
import styles from './incosts.module.scss';
import CheckmarkIcon from '@/public/assets/icons/checkmark-done-circle-orange-opacity25.svg';

export interface IncostsPropsType {
  INCOST_SERVICES: {
    img: HTMLImageElement;
    title: string;
    alt: string;
  }[];
}

const Incosts = ({INCOST_SERVICES}: IncostsPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <img
          alt="incosts"
          title="incosts"
          width={350}
          height={350}
          loading="lazy"
          src={CheckmarkIcon.src}
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>02 Co zawiera usługa</h2>
        <div className={styles.contentBox}>
          {INCOST_SERVICES.map((service, index) => (
            <div className={styles.serviceBox} key={index}>
              <img
                src={service.img.src}
                alt={service.alt}
                title={service.alt}
                width={24}
                height={24}
                loading="lazy"
              />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incosts;
