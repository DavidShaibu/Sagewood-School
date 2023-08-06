import { Images } from "./index";
import styles from "./Copyrights.module.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Copyrights = () => {

  const socials = [faFacebookF, faLinkedinIn, faInstagram, faTwitter, faYoutube];
  
  return (
    <section className={styles.copyrightsContent}>
      <div className={styles.logoAndSocials}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src={Images.logo}
            alt="A logo of sagewoods school"
          />
          <p className={styles.coprightsText}>&copy; All Rights Reserved</p>
        </div>
        <div className={styles.socials}>
          {socials.map((social) => (
            <FontAwesomeIcon
              key={social.iconName.toString()}
              icon={social}
              className={styles.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Copyrights;
