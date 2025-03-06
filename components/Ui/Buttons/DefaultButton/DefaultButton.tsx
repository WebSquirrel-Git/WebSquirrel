'use client';
import styles from './defaultButton.module.scss';

interface DefaultButtonPropsType {
  name: string;
  onClick: () => void;
}

const DefaultButton = ({name, onClick}: DefaultButtonPropsType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {name}
    </button>
  );
};

export default DefaultButton;
