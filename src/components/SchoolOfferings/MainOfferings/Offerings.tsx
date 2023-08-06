import LocationTimeline from "../../OperationDetails/OperationDetails";
import styles from "./Offerings.module.css";

interface Entries {
  imageUrl: string;
  heading: string;
  description: string;
}

interface Props {
  entries: Entries[];
}

const Offerings = ({ entries }: Props) => {
  return (
    <section className={styles.container}>
      {entries.map((entry, index) => (
        <div key={index} className={styles.offering}>
          <div
            key={index}
            className={styles.offerImage}
            style={{ backgroundImage: `url(${entry.imageUrl})` }}
          ></div>
          <h3 className={styles.offerTitle}>{entry.heading}</h3>
          <p className={styles.offerText}>{entry.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Offerings;
