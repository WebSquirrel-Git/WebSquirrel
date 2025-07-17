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
          <span className={styles.subHeader}>Cześć! Mam na imię Bartosz.</span>
          <h1>WebSquirrel</h1>

          <p>
            Tworzę{' '}
            <Link
              href="/oferta/strony-internetowe"
              title="oferta-strony-internetowe"
            >
              profesjonalne strony internetowe
            </Link>{' '}
            i{' '}
            <Link
              href="/oferta/sklepy-internetowe"
              title="oferta-sklepy-internetowe"
            >
              sklepy online
            </Link>
            , które zwiększą Twoją widoczność w internecie oraz polepszą
            wizerunek firmy. Świadczę także usługi{' '}
            <Link href="#offert" title="oferta-elementy-graficzne">
              projektowania graficznego
            </Link>{' '}
            i{' '}
            <Link href="#offert" title="oferta-elementy-graficzne">
              montażu rolek.
            </Link>{' '}
            Na mojej stronie internetowej znajdziesz także sekcję{' '}
            <Link href="/artykuly" title="oferta-elementy-graficzne">
              artykułów,
            </Link>{' '}
            gdzie dzielę się swoją wiedzą, która pomaga moim klientom.
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
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.textBox}>
          <span className={styles.subHeader}>Cześć! Mam na imię Bartosz.</span>
          <h1>WebSquirrel</h1>

          <p>
            Tworzę{' '}
            <Link
              href="/oferta/strony-internetowe"
              title="oferta-strony-internetowe"
            >
              profesjonalne strony internetowe
            </Link>{' '}
            i{' '}
            <Link
              href="/oferta/sklepy-internetowe"
              title="oferta-sklepy-internetowe"
            >
              sklepy online
            </Link>
            , które zwiększą Twoją widoczność w internecie oraz polepszą
            wizerunek firmy. Świadczę także usługi{' '}
            <Link href="#offert" title="oferta-elementy-graficzne">
              projektowania graficznego
            </Link>{' '}
            i{' '}
            <Link href="#offert" title="oferta-elementy-graficzne">
              montażu rolek.
            </Link>{' '}
            Na mojej stronie internetowej znajdziesz także sekcję{' '}
            <Link href="/artykuly" title="oferta-elementy-graficzne">
              artykułów,
            </Link>{' '}
            gdzie dzielę się swoją wiedzą, która pomaga moim klientom.
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
