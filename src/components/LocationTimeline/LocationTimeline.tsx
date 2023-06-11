import styles from "./LocationTimeline.module.css";

interface LocationTimelineInput {
  imageUrl: string;
  heading: string;
  text: string;
  linkText: string;
  linkUrl: string;
}

interface Props {
  entries: LocationTimelineInput[];
}

const LocationTimeline = ({ entries }: Props) => {
    const length = entries.length;
    const numberArray = [...Array(length).keys()].map((num) => num + 1);
    
  return (
    <div className={styles.locationTimeline}>
      {entries.map((entry, index) => (
        <div key={entry.heading} className={styles[`image${index + 1}`]}>
          <h2>{entry.heading}</h2>
          <p className={styles.timelineText}>{entry.text}</p>
          <a className={styles.timelineLink} href={entry.linkUrl}>{entry.linkText}</a>
        </div>
      ))}
    </div>
  );
};

export default LocationTimeline;

/* 
{ 
<div className={styles.locationTimeline}>
<div className={styles.image1}></div>
<div className={styles.image2}></div>
</div> 
}
*/