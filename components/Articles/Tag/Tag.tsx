'use client';
import styles from './tag.module.scss';
import GraphicIcon from '@/public/assets/icons/image-orange-icon.svg';
import SettingsIcon from '@/public/assets/icons/settings-orange-icon.svg';

export type TagsTypes = 'grafiki' | 'seo';

const TAGS = {
  grafiki: {
    title: 'GRAFIKI',
    img: GraphicIcon,
  },
  seo: {
    title: 'SEO',
    img: SettingsIcon,
  },
};
interface TagPropsType {
  tag: TagsTypes;
}

const Tag = ({tag}: TagPropsType) => {
  return (
    <div className={styles.container}>
      <img
        src={TAGS[tag].img.src}
        alt={TAGS[tag].title}
        title={TAGS[tag].title}
      />
      <span>{TAGS[tag].title}</span>
    </div>
  );
};

export default Tag;
