import styles from "./OperationDetails.module.css";

interface OperationDetails {
  imageUrl: string;
  heading: string;
  text: string;
  linkText: string;
  linkUrl: string;
}

interface Props {
  entries: OperationDetails[];
}

const LocationTimeline = ({ entries }: Props) => {
    
  return (
    <section className={styles.container}>
      {entries.map((entry, index) => (
        <div key={entry.heading} style={{backgroundImage: `url(${entry.imageUrl})`}} className={styles.imageContainer} >
          <h2>{entry.heading}</h2>
          <p className={styles.timelineText}>{entry.text}</p>
          <a className={styles.timelineLink} href={entry.linkUrl}>{entry.linkText}</a>
        </div>
      ))}
    </section>
  );
};

export default LocationTimeline;
