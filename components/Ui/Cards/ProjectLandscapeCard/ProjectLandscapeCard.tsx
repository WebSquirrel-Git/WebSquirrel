'use client';
import styles from './projectLandscapeCard.module.scss';
import OpenOrangeIcon from '@/public/assets/icons/open-orange-icon.svg';
import Cover from '@/public/portfolio/atzmdesign/cover.svg';
const ProjectLandscapeCard = () => {
  return (
    <button className={styles.container}>
      <h3>NEMO Sportowa Przygoda</h3>
      <img src={Cover.src} className={styles.coverImage} />
      <div className={styles.categoryBox}>
        <p>
          <b>Strona internetowa</b>
        </p>
        <p>NextJs</p>
      </div>

      <span className={styles.iconBox}>
        <img src={OpenOrangeIcon.src} />
      </span>
    </button>
  );
};
export default ProjectLandscapeCard;
