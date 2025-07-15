'use client';
import styles from './processSteps.module.scss';
import H2About from '@/components/Ui/Headers/H2About/H2About';
export interface StagesPropsType {
  STAGES_DATA: {
    header: string;
    number: string;
    description: string;
  }[];
}

const ProcessSteps = ({STAGES_DATA}: StagesPropsType) => {
  return (
    <div className={styles.container}>
      <H2About
        h2="Jak wygląda współpraca?"
        about="Kilka etapów pokazujących jak będziemy ze sobą współpracować."
      />
      <div className={styles.rowBox}>
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
  );
};

export default ProcessSteps;
