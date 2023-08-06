import styles from "./Facilities.module.css";
import { Images } from "./index";

interface Entries {
  heading: string;
  text: string;
  button: string;
}

interface Props {
  entries: Entries[];
}

const facilities = ({ entries }: Props) => {
  return (
    <section className={styles.container}>
      {entries.map((entry, index) => (
        <div key={index} className={styles.facilityContainer}>
          <h2 className={styles.facilityHeading}>{entry.heading}</h2>
          <p className={styles.facilityText}>
            {entry.text}
          </p>
          <button className={styles.btnLearnMore} type="button">
            {entry.button}
          </button>
        </div>
      ))}{" "}
      <div className={styles.facilityImageContainer}>
        <img
          className={styles.facilityImage}
          src={Images.pattern}
          alt="An image of a school facility"
        ></img>
      </div>
    </section>
  );
};

export default facilities;
