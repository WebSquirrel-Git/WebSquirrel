'use client';
import {useState} from 'react';
import Filter, {FilterPortfolioType, FilterTypes} from '../Filter/Filter';
import styles from './hero.module.scss';
import ProjectLandscapeCard from '@/components/Ui/Cards/ProjectLandscapeCard/ProjectLandscapeCard';
import {PORTFOLIO_PROJECTS, ProjectType} from '@/utils/portfolio/projects';

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
    title: 'Modyfikacje logo',
    type: 'svg',
    style: 'graphic',
    active: false,
    index: 3,
  },
  {
    title: 'Animacje HTML+CSS',
    type: 'animation',
    style: 'graphic',
    active: false,
    index: 4,
  },
  {
    title: 'Rolki Social Media',
    type: 'reel',
    style: 'graphic',
    active: false,
    index: 5,
  },
];

const Hero = () => {
  const [filters, setFilters] = useState(FILTERS);
  const [projectsToDisplay, setProjectsToDisplay] =
    useState<ProjectType[]>(PORTFOLIO_PROJECTS);

  const setActiveFilterHandler = (type: FilterPortfolioType) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.type === type
          ? {...filter, active: true}
          : {...filter, active: false}
      )
    );
    const newProjectToDisplay = PORTFOLIO_PROJECTS.filter(
      (project) => project.type === type
    );
    if (!newProjectToDisplay) return;
    setProjectsToDisplay(newProjectToDisplay);
  };

  const removeActiveFilterHandler = () => {
    setFilters(FILTERS);
    setProjectsToDisplay(PORTFOLIO_PROJECTS);
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
              onSetActiveFilter={() => setActiveFilterHandler(filter.type)}
              onRemoveActiveFilter={removeActiveFilterHandler}
              key={index}
              {...filter}
            />
          ))}
        </div>
      </div>
      <div className={styles.projectsBox}>
        {projectsToDisplay.map((project, index) => (
          <ProjectLandscapeCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
