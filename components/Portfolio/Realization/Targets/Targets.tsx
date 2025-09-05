'use client';
import Image from 'next/image';
import styles from './targets.module.scss';
import Icon from '@/public/assets/icons/disc-orange-icon.svg';

interface TargetsProps {
  targets: string[];
}

export const Targets = ({targets}: TargetsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2>Cele</h2>
        <>
          {targets.map((target, i) => (
            <div key={i} className={styles.targetBox}>
              <Image
                alt="target"
                src={Icon}
                width={32}
                height={32}
                loading="eager"
              />
              <p>{target}</p>
            </div>
          ))}
        </>
      </div>
      <Image
        className={styles.image}
        alt="Target"
        src={Icon}
        width={433}
        height={433}
        loading="eager"
      />
    </div>
  );
};
