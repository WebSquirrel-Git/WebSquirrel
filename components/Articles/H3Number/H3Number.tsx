'use client';
import styles from './h3Number.module.scss';

interface H3PropsType {
  number: number;
  title: string;
}

const H3Number = ({number, title}: H3PropsType) => {
  return (
    <span className={styles.container}>
      <span className={styles.number}>{number}</span>
      <h3>{title}</h3>
    </span>
  );
};
export default H3Number;
