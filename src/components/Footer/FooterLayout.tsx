import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FooterLayout.module.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FooterLayout = ({ children }: Props) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <p className={styles.text}>
            In 1996, a dedicated educator from New York, Sinok Park, founded The
            Best Kindergarten for working parents in New York metropolitan area.
          </p>
        </div>

        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <a className={styles.text} href="/">
            Our Kindergarten
          </a>
          <a className={styles.text} href="/">
            Latest News
          </a>
          <a className={styles.text} href="/">
            Upcoming Events
          </a>
          <a className={styles.text} href="/">
            Contacts
          </a>
        </div>

        <div className={styles.extra}>
          <h2>Extra</h2>
          <a className={styles.text} href="/">
            Twitter
          </a>
          <a className={styles.text} href="/">
            YouTube
          </a>
          <a className={styles.text} href="/">
            Instagram
          </a>
          <a className={styles.text} href="/">
            Snapchat
          </a>
        </div>

        <div className={styles.contact}>
          <h2>Contact Us</h2>

          <div className={styles.contactInfo}>
            <div
              className={[styles.address, styles.contactInfoDetails].join(" ")}
            >
              <FontAwesomeIcon
                key={"1"}
                icon={faMapMarkerAlt}
                className={styles.contactIcon}
              />
              <p className={styles.text}>Twitter</p>
            </div>

            <div
              className={[styles.address, styles.contactInfoDetails].join(" ")}
            >
              <FontAwesomeIcon
                key={"1"}
                icon={faMapMarkerAlt}
                className={styles.contactIcon}
              />
              <p className={styles.text}>Twitter</p>
            </div>

            <div
              className={[styles.address, styles.contactInfoDetails].join(" ")}
            >
              <FontAwesomeIcon
                key={"1"}
                icon={faMapMarkerAlt}
                className={styles.contactIcon}
              />
              <p className={styles.text}>Twitter</p>
            </div>

            <div
              className={[styles.address, styles.contactInfoDetails].join(" ")}
            >
              <FontAwesomeIcon
                key={"1"}
                icon={faMapMarkerAlt}
                className={styles.contactIcon}
              />
              <p className={styles.text}>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
