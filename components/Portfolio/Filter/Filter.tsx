'use client';
import styles from './filter.module.scss';

export type PortfolioProjectStyleType = 'website' | 'graphic';
export interface FilterTypes {
  title: string;
  style: PortfolioProjectStyleType;
  active: boolean;
  index: number;
  type: FilterPortfolioType;
}
interface FilterPropsType extends FilterTypes {
  onSetActiveFilter: () => void;
  onRemoveActiveFilter: () => void;
}
export type FilterPortfolioType =
  | 'website'
  | 'shop'
  | 'svg'
  | 'animation'
  | 'reel';
const Filter = ({
  title,
  style,
  active,
  index,
  onSetActiveFilter,
  onRemoveActiveFilter,
}: FilterPropsType) => {
  const onClick = () => {
    if (!active) onSetActiveFilter();
    if (active) onRemoveActiveFilter();
  };

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
