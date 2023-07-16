import { useEffect, useState } from "react";
import flower from "./Assets/flower.png";
import curls2 from "./Assets/curls2.png";
import styles from "./Reviews.module.css";

interface Entry {
  name: string;
  image: string;
  text: string;
  status: string;
}

interface Props {
  entries: Entry[];
}

const Reviews = ({ entries }: Props) => {
  const [displayedReview, setDisplayedReview] = useState(0);
  const lastReview = entries.length - 1;
  const handleReviewChange = () => {
    if (displayedReview < lastReview) {
      setDisplayedReview((prevReview) => prevReview + 1);
    } else {
      setDisplayedReview(0);
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleReviewChange, 5000);

    return () => clearTimeout(timer);
  });
  return (
    <div className={styles.container}>
      <div className={styles.reviewContent}>
        <div className={styles.reviewContentWrapper}>
          <h2 className={styles.reviewHeader}>What Parents Say</h2>
          <div className={styles.sliderDivs}>
            {entries.map((entry, index) => (
              <div
                key={index}
                className={`${styles.sliderDiv} ${
                  index === displayedReview ? styles.active : ""
                }`}
              ></div>
            ))}
          </div>
          <div className={styles.sliderContainer}>
            {entries
              .slice(displayedReview, displayedReview + 1)
              .map((entry, index) => (
                <div key={index}>
                  <img
                    className={styles.images}
                    src={entry.image}
                    alt="Image of review writer"
                  />
                  <p className={styles.reviewText}>{entry.text}</p>
                  <p className={styles.name}>{entry.name}</p>
                  <p className={styles.status}>{entry.status}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
