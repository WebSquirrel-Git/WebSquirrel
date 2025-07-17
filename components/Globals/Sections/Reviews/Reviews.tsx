'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './reviews.module.scss';
import Review1 from '@/public/assets/reviews/triget-review.webp';
import Review2 from '@/public/assets/reviews/perlia-review.webp';
import Review3 from '@/public/assets/reviews/nemo-review.webp';
import Review4 from '@/public/assets/reviews/atzm-review.webp';
import ForwardIcon from '@/public/assets/icons/chevron-forward-icon.svg';
import BackIcon from '@/public/assets/icons/chevron-back-icon.svg';
import GoogleIcon from '@/public/assets/reviews/google-icon.webp';
import StarIcon from '@/public/assets/icons/star-gold-icon.svg';
import {useState} from 'react';
import Link from 'next/link';

const Reviews = () => {
  const REVIEWS_ARRAY = [Review1, Review2, Review3, Review4];
  const [reviewNumber, setReviewNumber] = useState(0);
  const nextReviewHandler = () => {
    if (reviewNumber === REVIEWS_ARRAY.length - 1) {
      setReviewNumber(0);
    } else {
      setReviewNumber((prevState) => (prevState += 1));
    }
  };
  const prevReviewHandler = () => {
    if (reviewNumber === 0) {
      setReviewNumber(REVIEWS_ARRAY.length - 1);
    } else {
      setReviewNumber((prevState) => (prevState -= 1));
    }
  };

  const selectedReviewHandler = (number: number) => {
    setReviewNumber(number);
  };
  return (
    <div className={styles.container}>
      <H2About
        h2="Opinie klientów"
        about="Sprawdź co o moich usługach mówią klienci."
      />
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsBox}>
          <button
            title="Previous review"
            onClick={prevReviewHandler}
            className={styles.chevronButton}
          >
            <img src={BackIcon.src} alt="back icon" width={64} height={64} />
          </button>
          <img
            className={styles.reviewImg}
            src={REVIEWS_ARRAY[reviewNumber].src}
            width={800}
            height={396}
            alt="Opinia o WebSquirrel"
          />
          <button
            title="Next review"
            onClick={nextReviewHandler}
            className={styles.chevronButton}
          >
            <img
              src={ForwardIcon.src}
              alt="forward icon"
              width={64}
              height={64}
            />
          </button>
        </div>
        <div className={styles.dotsBox}>
          {REVIEWS_ARRAY.map((review, index) => {
            if (index === reviewNumber) {
              return <span className={styles.orangeDot} key={index}></span>;
            }
            return (
              <button
                title="Select review"
                className={styles.whiteDot}
                onClick={() => selectedReviewHandler(index)}
                key={index}
              ></button>
            );
          })}
        </div>
        <div className={styles.starsBox}>
          <img src={StarIcon.src} alt="star icon" width={32} height={32} />
          <img src={StarIcon.src} alt="star icon" width={32} height={32} />
          <img src={StarIcon.src} alt="star icon" width={32} height={32} />
          <img src={StarIcon.src} alt="star icon" width={32} height={32} />
          <img src={StarIcon.src} alt="star icon" width={32} height={32} />
        </div>
        <span className={styles.review}>5/5</span>
        <p>Sprawdź na Google</p>
        <Link href="https://g.co/kgs/wdrv5jZ">
          <img
            className={styles.googleIcon}
            src={GoogleIcon.src}
            alt="google icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
