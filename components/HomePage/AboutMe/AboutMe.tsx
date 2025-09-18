'use client';
import Image from 'next/image';
import styles from './aboutMe.module.scss';
import AboutMeImage from '@/public/assets/about_me.png';
import Logo from '@/public/assets/logo/WebSquirrel-logo-and-name.svg';
export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h2>Poznajmy się!</h2>

      <div className={styles.rowBox}>
        {' '}
        <Image
          className={`${styles.logoMobile} ${styles.mobile}`}
          src={Logo}
          alt="websquirrel"
        />
        <Image
          className={styles.aboutmeImage}
          src={AboutMeImage}
          alt="owner"
          loading="eager"
        />
        <div className={styles.textBox}>
          <p>
            Nazywam się Bartosz Bednarski, jestem projektantem stron i sklepów
            internetowych specjalizującym się w programowaniu warstw front-end
            oraz tworzeniu autorskich rozwiązań w języku TypeScript. Branże, w
            których posiadam największe doświadczenie obejmują szkoły pływania
            oraz sprzedaż produktów handmade.
          </p>
          <p>
            Chęć tworzenia kreatywnych rozwiązań, które mają realny wpływ na
            rozwój firm, bezpośrednie reakcje zadowolonych klientów oraz
            możliwości poznawania nowych ludzi napędzają mnie do rozwoju w
            tworzeniu oraz projektowaniu stron internetowych, które pomagają w
            rozwoju Waszych biznesów.
          </p>
          <div className={`${styles.logo} ${styles.pc}`}>
            <Image src={Logo} alt="websquirrel" />
          </div>
        </div>
      </div>
    </div>
  );
};
