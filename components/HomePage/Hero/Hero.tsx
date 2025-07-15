'use client';
import styles from './hero.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-logo-lg.svg';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
import VideoContainer from './VideoContainer/VideoContainer';
import {useEffect, useState} from 'react';
import Link from 'next/link';
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobile = window.innerWidth <= 1250;
    setIsMobile(mobile);
  }, []);
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
          , które zwiększą Twoją widoczność w internecie oraz polepszą wizerunek
          firmy. Świadczę także usługi{' '}
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
      {isMobile && (
        <img
          className={styles.logo}
          src={Logo.src}
          alt="websquirrelLogo"
          title="websquirrelLogo"
          width={837}
          height={845}
          loading="eager"
        />
      )}
      {!isMobile && <VideoContainer />}
    </div>
  );
};

export default Hero;
