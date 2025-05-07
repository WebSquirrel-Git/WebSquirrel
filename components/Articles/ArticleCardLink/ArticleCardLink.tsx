'use client';
import Tag, {TagsTypes} from '../Tag/Tag';
import styles from './articleCardLink.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-logo-20x20.svg';
import CalendarIcon from '@/public/assets/icons/calendar-orange-icon.svg';
import Link from 'next/link';

interface ArticleCardLinkPropsType {
  url: string;
  tags: TagsTypes[];
  title: string;
  about: string;
  author: string;
  date: string;
}

const ArticleCardLink = ({
  url,
  tags,
  title,
  about,
  author,
  date,
}: ArticleCardLinkPropsType) => {
  return (
    <Link href={url} className={styles.container}>
      <div className={styles.tagsBox}>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.aboutBox}>
        <p>{about}</p>
        <div className={styles.authorsBox}>
          <span className={styles.rowBox}>
            <img
              src={Logo.src}
              alt="websquirrel-logo"
              title="websquirrel-logo"
              width={20}
              height={20}
              loading="eager"
            />
            <span>{author}</span>
          </span>
          <span className={styles.rowBox}>
            <img
              src={CalendarIcon.src}
              alt="calendar-icon"
              title="calendar-icon"
              width={20}
              height={20}
              loading="eager"
            />
            <span>{date}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCardLink;
