import styles from "./Activities.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Entry {
    icon: IconProp;
    heading: string;
    text: string;
}

interface Props {
    entries: Entry[]
}

const Activities = ({ entries } : Props) => {
  return (
    <section className={styles.container}>
        <h2 className={styles.sectionTitle}>Other Highlights</h2>
            <div className={styles.innerContainer}>
                {entries.map((entry, index) => (
                  <div key={index} className={styles.activity}>
                      <div className={styles.circle}>
                        <FontAwesomeIcon icon={entry.icon} />
                      </div>
                      <div className={styles.activityContent}>
                        <h3 className={styles.heading}>{entry.heading}</h3>
                        <p className={styles.text}>{entry.text}</p>
                      </div>
                  </div>
                ))}
            </div>

    </section>
  );
};

export default Activities;


{/* <div className={styles.container}>
<h2 className={styles.sectionTitle}>Our Activities</h2>
<div className={styles.innerContainer}>
    <div className={styles.circle}>
      <FontAwesomeIcon icon={faBook} />
    </div>
    <div className={styles.activity}>
        <h3 className={styles.heading}>British Curriculum</h3>
        <p className={styles.text}>We use British Curriculum and Montesson Materials to teach</p>
    </div>
</div>
</div> */}