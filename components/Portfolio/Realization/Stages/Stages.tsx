'use client';
import Image, {StaticImageData} from 'next/image';
import styles from './stages.module.scss';

interface StagesProps {
  stages: {
    icon: StaticImageData;
    header: string;
    description: string;
  }[];
}

export const Stages = ({stages}: StagesProps) => {
  return (
    <div className={styles.container}>
      <h2>Etapy współpracy</h2>
      <>
        {stages.map((stage, i) => (
          <div key={i} className={styles.stageBox}>
            <Image
              alt={stage.header}
              src={stage.icon}
              className={styles.image}
              width={64}
              height={64}
              loading="eager"
            />
            <div className={styles.contentBox}>
              <p className={styles.header}>{stage.header}</p>
              <p>{stage.description}</p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
