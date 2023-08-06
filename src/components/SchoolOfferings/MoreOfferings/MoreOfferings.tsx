import React from "react";
import styles from "./MoreOfferings.module.css";

interface Text {
  heading: string;
  description: string;
}

interface Entry {
  imageUrl?: string;
  offering?: Text;
}

interface Props {
  entries: Entry[];
}

const MoreOfferings = ({ entries }: Props) => {
  return (
    <section className={styles.container}>
      {entries.map((entry, index) => (
        <React.Fragment key={index}>
          {entry.imageUrl && (
            <div className={styles.imageContainer}>
              <img
                className={styles.offerImage}
                src={entry.imageUrl}
                alt="An image of a child in school"
              ></img>
            </div>
          )}

          {entry.offering && (
            <div className={styles.offering}>
              <h1 className={styles.offerHeading}>{entry.offering?.heading}</h1>
              <p className={styles.offerText}>{entry.offering?.description}</p>
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default MoreOfferings;

// <div
//   style={{ backgroundImage: `url(${entry.imageUrl})` }}
//   className={styles.offerImage}
// ></div>