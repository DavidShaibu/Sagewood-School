import logo from "./assets/sage.png";
import styles from "./Copyrights.module.css";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Copyrights = () => {

  const socials = [faFacebookF, faLinkedinIn, faGoogle, faTwitter, faYoutube];
  
  return (
    <div className={styles.copyrightsContent}>
      <div className={styles.logoAndSocials}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src={logo}
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
    </div>
  );
};

export default Copyrights;
