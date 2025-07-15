'use client';
import styles from './h2About.module.scss';

interface H2AboutProps {
  h2: string;
  about: string;
}

const H2About = ({h2, about}: H2AboutProps) => {
  return (
    <div className={styles.container}>
      <h2>{h2}</h2>
      <p>{about}</p>
    </div>
  );
};

export default H2About;
