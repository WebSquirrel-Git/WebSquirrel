'use client';
import Image, {StaticImageData} from 'next/image';
import styles from './gallery.module.scss';

interface GalleryProps {
  galleryLandscapes: StaticImageData[];
  galleryPortraits: StaticImageData[];
  alt: string;
}

export const Gallery = ({
  galleryLandscapes,
  galleryPortraits,
  alt,
}: GalleryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.landscapesBox}>
        {galleryLandscapes.map((image, i) => (
          <Image
            alt={alt}
            src={image}
            key={i}
            width={1213}
            height={607}
            loading="lazy"
          />
        ))}
      </div>
      <div className={styles.portraitsBox}>
        {galleryPortraits.map((image, i) => (
          <Image
            alt={alt}
            src={image}
            key={i}
            width={400}
            height={748}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
