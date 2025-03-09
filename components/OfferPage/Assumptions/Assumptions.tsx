'use client';
import styles from './assumptions.module.scss';
import ReaderIcon from '@/public/assets/icons/reader-icon.svg';

interface AssumptionsPropsType {
  assumptions: string[];
}

const Assumptions = ({assumptions}: AssumptionsPropsType) => {
  return (
    <div className={styles.container}>
      <img src={ReaderIcon.src} className={styles.icon} />
      <div className={styles.contentBox}>
        <h3>Założenia</h3>
        {assumptions.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Assumptions;
