'use client';
import styles from './advantages.module.scss';
import AddIcon from '@/public/assets/icons/add-circle-orange-opacity25.svg';
export interface AdvantagesPropsType {
  ADVANTAGES_DATA: {
    header: string;
    icon: HTMLImageElement;
    description: string;
  }[];
}

const Advantages = ({ADVANTAGES_DATA}: AdvantagesPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2>Twoje korzyści 01</h2>
        <div className={styles.contentBox}>
          {ADVANTAGES_DATA.map((advantage, index) => (
            <div className={styles.advantageBox} key={index}>
              <div className={styles.topBox}>
                <img
                  src={advantage.icon.src}
                  width={50}
                  height={50}
                  alt={advantage.header}
                />
                <h3>{advantage.header}</h3>
              </div>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.iconBox}>
        <img
          alt="advantages"
          title="advantages"
          width={350}
          height={350}
          loading="lazy"
          src={AddIcon.src}
        />
      </div>
    </div>
  );
};

export default Advantages;
