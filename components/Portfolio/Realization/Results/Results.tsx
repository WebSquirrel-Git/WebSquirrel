'use client';
import Image from 'next/image';
import styles from './results.module.scss';
import ResultOrange from '@/public/assets/icons/checkmark-orange-icon.svg';
import ResultGreen from '@/public/assets/icons/checkmark-green-icon.svg';

interface ResultsProps {
  results: string[];
}

export const Results = ({results}: ResultsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2>Efekty</h2>
        <>
          {results.map((result, i) => (
            <div key={i} className={styles.targetBox}>
              <Image
                alt="checkmark"
                src={ResultGreen}
                width={32}
                height={32}
                loading="eager"
              />
              <p>{result}</p>
            </div>
          ))}
        </>
      </div>
      <Image
        className={styles.image}
        alt="checkmark"
        src={ResultOrange}
        width={433}
        height={433}
        loading="eager"
      />
    </div>
  );
};
