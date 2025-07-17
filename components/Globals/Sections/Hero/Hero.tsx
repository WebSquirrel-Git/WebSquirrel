'use client';
import styles from './hero.module.scss';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
import {StaticImageData} from 'next/image';
import dynamic from 'next/dynamic';

export interface OffertHeroPropsType {
  subheader: string;
  title: string;
  description: string;
  videoTitle: string;
  isMobile: boolean;
  imageMobile: StaticImageData;
}

const VideoContainer = dynamic(
  () => import('./VideoContainer/VideoContainer'),
  {
    ssr: true,
  }
);

const Hero = ({
  subheader,
  title,
  videoTitle,
  description,
  isMobile,
  imageMobile,
}: OffertHeroPropsType) => {
  if (isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h1>{title}</h1>
          <span className={styles.subHeader}>{subheader}</span>

          <p>{description}</p>
          <div className={styles.rowBox}>
            <DefaultLink name="Skontaktuj się" url="#contact" />
          </div>
        </div>
        <img
          className={styles.logo}
          src={imageMobile.src}
          alt={title}
          title={title}
          width={837}
          height={845}
          loading="eager"
        />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h1>{title}</h1>
          <span className={styles.subHeader}>{subheader}</span>

          <p>{description}</p>
          <div className={styles.rowBox}>
            <DefaultLink name="Skontaktuj się" url="#contact" />
          </div>
        </div>
        <img
          className={styles.logo}
          src={imageMobile.src}
          alt={title}
          title={title}
          width={837}
          height={845}
          loading="eager"
        />
        <VideoContainer videoTitle={videoTitle} />
      </div>
    );
  }
};

export default Hero;
