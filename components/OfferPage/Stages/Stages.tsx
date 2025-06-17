'use client';
import styles from './stages.module.scss';
import StatsIcon from '@/public/assets/icons/stats-chart-orange-opacity25.svg';

export interface StagesPropsType {
  STAGES_DATA: {
    header: string;
    number: string;
    description: string;
  }[];
}

const Stages = ({STAGES_DATA}: StagesPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <img
          alt="stages"
          title="stages"
          width={350}
          height={350}
          loading="lazy"
          src={StatsIcon.src}
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>04 Etapy współpracy</h2>
        <div className={styles.contentBox}>
          {STAGES_DATA.map((stage, index) => (
            <div className={styles.stageBox} key={index}>
              <div className={styles.topBox}>
                <span className={styles.number}>{stage.number}</span>
                <h3>{stage.header}</h3>
              </div>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stages;
