'use client';
import Image, {StaticImageData} from 'next/image';
import styles from './reachResults.module.scss';
import ReachResultsOrange from '@/public/assets/icons/stats-chart-orange.svg';
import ResultGreen from '@/public/assets/icons/checkmark-green-icon.svg';

interface ReachResultsProps {
  results: string[];
  image?: StaticImageData;
  alt: string;
  header: string;
}

export const ReachResults = ({
  header,
  results,
  image,
  alt,
}: ReachResultsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
        <div className={styles.contentBox}>
          <h2>{header}</h2>
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
          alt="graph"
          src={ReachResultsOrange}
          width={433}
          height={433}
          loading="eager"
        />
      </div>
      {image && (
        <Image
          src={image}
          alt={alt}
          width={1920}
          height={800}
          className={styles.searchConsoleGraph}
        />
      )}
    </div>
  );
};
