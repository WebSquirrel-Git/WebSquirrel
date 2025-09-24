'use client';
import Image, {StaticImageData} from 'next/image';
import styles from './performanceResults.module.scss';
import PerformanceResultsOrange from '@/public/assets/icons/rocket-orange-icon.svg';
import ResultGreen from '@/public/assets/icons/checkmark-green-icon.svg';

interface PerformanceResultsProps {
  results: string[];
  imageLandscape?: StaticImageData;
  imagesRow: StaticImageData[];
  alt: string;
}

export const PerformanceResults = ({
  results,
  imageLandscape,
  imagesRow,
  alt,
}: PerformanceResultsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
        <div className={styles.contentBox}>
          <h2>Wydajność</h2>
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
          alt="rocket"
          src={PerformanceResultsOrange}
          width={433}
          height={433}
          loading="eager"
        />
      </div>
      <div className={styles.imagesContainer}>
        {imageLandscape && (
          <Image
            src={imageLandscape}
            alt={alt}
            width={1920}
            height={800}
            className={styles.searchConsoleGraph}
          />
        )}
        <div className={styles.imagesRowBox}>
          {imagesRow.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="analiza szybkości strony"
              width={700}
              height={500}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
