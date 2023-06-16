import styles from "./Facilities.module.css";
import facilityImage from "./assets/diamonds.png";

const facilities = () => {
  return (
    <div className={styles.container}>
        <div className={styles.facilityContainer}>
            <h2 className={styles.facilityHeading}>What Are The Facilities?</h2>
            <p className={styles.facilityText}>Infant classroom offers strategies for building positive relationships, helping children develop self-regulation and responding to challenging behaviors in a sanitized and safe environment.</p>
            <button className={styles.btnLearnMore} type="button">Learn More</button>
        </div>
        <div className={styles.facilityImageContainer}>
            <img className={styles.facilityImage} src={facilityImage} alt="An image of a school facility"></img>
        </div>
    </div>
  )
}

export default facilities