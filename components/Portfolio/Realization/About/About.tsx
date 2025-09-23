'use client';
import Image, {StaticImageData} from 'next/image';
import styles from './about.module.scss';

interface AboutProps {
  text1: string;
  text2: string;
  logo: StaticImageData;
  alt: string;
  header?: string;
}

export const About = ({text1, text2, logo, alt, header}: AboutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2>{header ? header : 'O firmie'}</h2>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <Image
        className={styles.image}
        alt={alt}
        src={logo}
        width={433}
        height={433}
        loading="eager"
      />
    </div>
  );
};
