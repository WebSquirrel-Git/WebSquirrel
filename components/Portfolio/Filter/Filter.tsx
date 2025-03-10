'use client';
import styles from './filter.module.scss';

export interface FilterTypes {
  title: string;
  style: 'website' | 'graphic';
  active: boolean;
  index: number;
  type: FilterType;
}
interface FilterPropsType extends FilterTypes {
  onClick: () => void;
}
export type FilterType = 'website' | 'shop' | 'svg' | 'animation' | 'reel';
const Filter = ({title, style, active, index, onClick}: FilterPropsType) => {
  if (style === 'website') {
    const filterStyle = active
      ? styles.filterWebsiteActive
      : styles.filterWebsite;
    return (
      <span onClick={onClick} className={filterStyle}>
        <span className={styles.number}>0{index}</span>
        <h2>{title}</h2>
      </span>
    );
  }
  if (style === 'graphic') {
    const filterStyle = active
      ? styles.filterGraphicActive
      : styles.filterGraphic;
    return (
      <span onClick={onClick} className={filterStyle}>
        <span className={styles.number}>0{index}</span>
        <h2>{title}</h2>
      </span>
    );
  }
};

export default Filter;
