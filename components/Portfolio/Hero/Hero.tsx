'use client';
import {useState} from 'react';
import Filter, {FilterType, FilterTypes} from '../Filter/Filter';
import styles from './hero.module.scss';
import ProjectLandscapeCard from '@/components/Ui/Cards/ProjectLandscapeCard/ProjectLandscapeCard';

const FILTERS: FilterTypes[] = [
  {
    title: 'Strony internetowe',
    type: 'website',
    style: 'website',
    active: false,
    index: 1,
  },
  {
    title: 'Sklepy internetowe',
    type: 'shop',
    style: 'website',
    active: false,
    index: 2,
  },
  {
    title: 'Grafiki SVG',
    type: 'svg',
    style: 'graphic',
    active: false,
    index: 3,
  },
  {
    title: 'Animacje',
    type: 'animation',
    style: 'graphic',
    active: false,
    index: 4,
  },
  {
    title: 'Rolki promocyjne',
    type: 'reel',
    style: 'graphic',
    active: false,
    index: 5,
  },
];
const Hero = () => {
  const [filters, setFilters] = useState(FILTERS);

  const setActiveFilterHandler = (type: FilterType) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.type === type
          ? {...filter, active: true}
          : {...filter, active: false}
      )
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <div className={styles.headerBox}>
          <h1>REALIZACJE</h1>
          <p>
            Sprawdź co ciekawego udało nam się stworzyć. Może coś przykuje Twoją
            uwagę i zrobimy coś podobnego, a może Cię zainspirujemy i stworzymy
            coś nowego.
          </p>
        </div>
        <div className={styles.filtersBox}>
          {filters.map((filter, index) => (
            <Filter
              onClick={() => setActiveFilterHandler(filter.type)}
              key={index}
              {...filter}
            />
          ))}
        </div>
      </div>
      <div className={styles.projectsBox}>
        <ProjectLandscapeCard />
      </div>
    </div>
  );
};

export default Hero;
