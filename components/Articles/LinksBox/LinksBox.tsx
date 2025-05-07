'use client';
import styles from './linksBox.module.scss';

const LinksBox = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Wszystkie linki</p>
      <p>
        <b>Zmiana rozdzielczości obrazu:</b>
      </p>
      <a href="https://www.iloveimg.com/resize-image">
        https://www.iloveimg.com/resize-image
      </a>
      <p>
        <b>Zmiana formatu obrazu:</b>
      </p>
      <a href="https://pixelied.com/convert/jpg-converter/jpg-to-webp">
        https://pixelied.com/convert/jpg-converter/jpg-to-webp
      </a>
      <p>
        <b>Figma:</b>
      </p>
      <a href="https://www.figma.com/pl-pl/">https://www.figma.com/pl-pl/</a>
    </div>
  );
};

export default LinksBox;
