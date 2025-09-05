'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './technologiesWebsite.module.scss';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';

export interface TechnologiesPropsType {
  TECHNOLOGIES_DATA: {
    header: string;
    icon: HTMLImageElement;
    description1: string;
    description2: string;
    id: string;
  }[];
}

const TechnologiesWebsite = ({TECHNOLOGIES_DATA}: TechnologiesPropsType) => {
  return (
    <div className={styles.container}>
      <H2About
        h2="Technologie które wykorzystuje do tworzenia stron"
        about="Krótkie informacje o narzędziach, które posłużą do stworzenia Twojej strony internetowej. Po ustaleniu planu projektu wybierzemy odpowiednie rozwiązanie. Jeżeli masz jakieś pytania i chcesz się dowiedzieć czegoś więcej o tym jakie możliwości daje jedna z poniższych technologii napisz do mnie."
      />
      <DefaultLink name="Zapytaj się" url="#contact" />

      {TECHNOLOGIES_DATA.map((technology, index) => (
        <div id={technology.id} className={styles.technologyBox} key={index}>
          <div className={styles.topBox}>
            <img
              src={technology.icon.src}
              width={50}
              height={50}
              alt={technology.header}
            />
            <h3>{technology.header}</h3>
          </div>
          <p>{technology.description1}</p>
          <p>{technology.description2}</p>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesWebsite;
