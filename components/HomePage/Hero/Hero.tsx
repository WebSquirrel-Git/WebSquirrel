'use client';
import styles from './hero.module.scss';
import HeroMobileImg from '@/public/assets/hero/offer-hero-mobile.webp';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
import Link from 'next/link';
import dynamic from 'next/dynamic';

interface HeroPropsType {
  isMobile: boolean;
}
const VideoContainer = dynamic(
  () => import('./VideoContainer/VideoContainer'),
  {
    ssr: true,
  }
);

const Hero = ({isMobile}: HeroPropsType) => {
  if (isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles.textBox}>
          <span className={styles.subHeader}>Strony i sklepy internetowe</span>
          <h1>WebSquirrel</h1>

          <p>
            <br /> Zajmuję się projektowaniem i tworzeniem{' '}
            <Link
              href="/oferta/strony-internetowe"
              title="oferta-strony-internetowe"
            >
              stron
            </Link>{' '}
            oraz{' '}
            <Link
              href="/oferta/sklepy-internetowe"
              title="oferta-sklepy-internetowe"
            >
              sklepów internetowych
            </Link>
            , które mają konkretne cele i są dostosowane do profilu Twojej
            działalności. Każdy projekt zaczyna się od analizy profilu firmy,
            konkurencji i ustaleniu konkretnej strategii w jakim celu tworzymy
            stronę lub sklep.
          </p>

          <DefaultLink name="Skontaktuj się" url="/#contact" />
        </div>
        <img
          className={styles.logo}
          src={HeroMobileImg.src}
          alt="Telefon z ofertą websquirrel"
          title="Telefon z ofertą websquirrel"
          width={400}
          height={420}
          loading="eager"
          fetchPriority="high"
        />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.textBox}>
          <span className={styles.subHeader}>Strony i sklepy internetowe</span>
          <h1>WebSquirrel</h1>

          <p>
            <br /> Zajmuję się projektowaniem i tworzeniem{' '}
            <Link
              href="/oferta/strony-internetowe"
              title="oferta-strony-internetowe"
            >
              stron
            </Link>{' '}
            oraz{' '}
            <Link
              href="/oferta/sklepy-internetowe"
              title="oferta-sklepy-internetowe"
            >
              sklepów internetowych
            </Link>
            , które mają konkretne cele i są dostosowane do profilu Twojej
            działalności. Każdy projekt zaczyna się od analizy profilu firmy,
            konkurencji i ustaleniu konkretnej strategii w jakim celu tworzymy
            stronę lub sklep.
          </p>

          <DefaultLink name="Skontaktuj się" url="/#contact" />
        </div>
        <img
          className={styles.logo}
          src={HeroMobileImg.src}
          alt="Telefon z ofertą websquirrel"
          title="Telefon z ofertą websquirrel"
          width={400}
          height={420}
          loading="eager"
        />
        <VideoContainer />
      </div>
    );
  }
};

export default Hero;
