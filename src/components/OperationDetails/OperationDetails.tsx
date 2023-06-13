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
    <div className={styles.container}>
      {entries.map((entry, index) => (
        <div key={entry.heading} style={{backgroundImage: `url(${entry.imageUrl})`}} className={styles.imageContainer} >
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
</div> className={styles[`image${index + 1}`]} style={{backgroundImage: `url("./assets/image3.png")`}}
}
*/