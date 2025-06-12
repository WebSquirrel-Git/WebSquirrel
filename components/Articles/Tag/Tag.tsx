'use client';
import styles from './tag.module.scss';
import GraphicIcon from '@/public/assets/icons/image-orange-icon.svg';
import SettingsIcon from '@/public/assets/icons/settings-orange-icon.svg';
import CartIcon from '@/public/assets/icons/cart-orange-icon.svg';
import TypographyIcon from '@/public/assets/icons/typography-orange-icon.svg';
import WebsiteIcon from '@/public/assets/icons/website-orange-icon.svg';

export type TagsTypes =
  | 'grafiki'
  | 'seo'
  | 'sklepyInternetowe'
  | 'stronyInternetowe'
  | 'typografia';

const TAGS = {
  grafiki: {
    title: 'GRAFIKI',
    img: GraphicIcon,
  },
  seo: {
    title: 'SEO',
    img: SettingsIcon,
  },
  sklepyInternetowe: {
    title: 'SKLEPY INTERNETOWE',
    img: CartIcon,
  },
  stronyInternetowe: {
    title: 'STRONY INTERNETOWE',
    img: WebsiteIcon,
  },
  typografia: {
    title: 'TYPOGRAFIA',
    img: TypographyIcon,
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
