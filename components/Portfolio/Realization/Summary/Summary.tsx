'use client';
import styles from './summary.module.scss';
import {StaticImageData} from 'next/image';

interface SummaryProps {
  text: string;
  logo: StaticImageData;
  alt: string;
}

export const Summary = ({text}: SummaryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2>Podsumowanie</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
