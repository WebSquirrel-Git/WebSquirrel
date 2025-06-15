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
        <span className={styles.subHeader}>Hej! Mam na imię Bartosz.</span>
        <h1>WebSquirrel</h1>
        <p>
          <b>Projektowanie stron i sklepów internetowych</b>
        </p>
        <p>
          Tworzę{' '}
          <Link href="/#offerWebsites" title="oferta-strony-internetowe">
            strony
          </Link>{' '}
          i{' '}
          <Link href="/#offerWebsites" title="oferta-sklepy-internetowe">
            sklepy internetowe
          </Link>{' '}
          od tych prostych do bardziej wymagających - wszystkie dostosowane do
          Twoich potrzeb.
          <br /> Zajmuje się także{' '}
          <Link href="/#offerGraphics" title="oferta-elementy-graficzne">
            tworzeniem grafik
          </Link>{' '}
          - Brandbooki, banery, wizytówki, animacje i inne.
        </p>
        <p>
          Moje realizacje możesz sprawdzić w zakładce{' '}
          <Link href="/portfolio" title="portfolio">
            portfolio.
          </Link>
          <br />
          Jeżeli jesteś tutaj żeby się dowiedzieć czegoś nowego to zapraszam do
          zakładki{' '}
          <Link href="/artykuly" title="artykuly">
            artykuły
          </Link>
          .<br />
          Szczegółowa{' '}
          <Link href="/#offerWebsites" title="oferta-strony-internetowe">
            oferta usług
          </Link>{' '}
          znajduje się poniżej.
        </p>
        <p className={styles.textOrange}>Konsultacje są darmowe więc ...</p>
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
