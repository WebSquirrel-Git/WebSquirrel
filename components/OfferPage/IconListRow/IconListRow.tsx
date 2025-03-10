'use client';
import styles from './iconListRow.module.scss';
import ReaderIcon from '@/public/assets/icons/reader-icon.svg';
import CheckmarkDoneCircleIcon from '@/public/assets/icons/checkmark-done-circle-icon.svg';
import CloseCircleIcon from '@/public/assets/icons/close-circle-icon.svg';
import CodeSlashIcon from '@/public/assets/icons/code-slash-icon.svg';

const ICONS = {
  reader: ReaderIcon,
  checkmarkDone: CheckmarkDoneCircleIcon,
  closeCircle: CloseCircleIcon,
  codeSlash: CodeSlashIcon,
};

export interface IconListRowPropsType {
  list: string[];
  icon: 'reader' | 'checkmarkDone' | 'closeCircle' | 'codeSlash';
  title: string;
}

const IconListRow = ({list, icon, title}: IconListRowPropsType) => {
  const img = ICONS[icon];
  return (
    <div className={styles.container}>
      <img src={img.src} className={styles.icon} />
      <div className={styles.contentBox}>
        <h2>{title}</h2>
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default IconListRow;
