'use client';
import styles from './technologies.module.scss';
import CodeIcon from '@/public/assets/icons/code-slash-orange-opacity-25.svg';

export interface TechnologiesPropsType {
  TECHNOLOGIES_DATA: {
    header: string;
    icon: HTMLImageElement;
    description: string;
  }[];
}

const Technologies = ({TECHNOLOGIES_DATA}: TechnologiesPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2>Opcje wykonania 03</h2>
        <div className={styles.contentBox}>
          {TECHNOLOGIES_DATA.map((technology, index) => (
            <div className={styles.technologyBox} key={index}>
              <div className={styles.topBox}>
                <img
                  src={technology.icon.src}
                  width={50}
                  height={50}
                  alt={technology.header}
                />
                <h3>{technology.header}</h3>
              </div>
              <p>{technology.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.iconBox}>
        <img
          alt="code"
          title="code"
          width={350}
          height={350}
          loading="lazy"
          src={CodeIcon.src}
        />
      </div>
    </div>
  );
};

export default Technologies;
