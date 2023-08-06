import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { CSSProperties, useState } from "react";
import styles from "./ContactDetails.module.css";
import { operationDetailsInput } from "./index";

const ContactDetails = () => {
  const addressObject = operationDetailsInput.find(input => input.heading === "Location");
  const socials = [faFacebookF, faLinkedinIn, faInstagram, faTwitter, faYoutube];
  const contact = [
    {
      icon: faMapMarkerAlt,
      address: addressObject?.text,
    },
    { icon: faPhoneVolume, address: "+234-805-703-7001" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className={styles.container}>
      <div className={styles.innerContainer}>
              <div className={styles.socials}>
                {socials.map((social) => (
                  <FontAwesomeIcon
                    key={social.iconName.toString()}
                    icon={social}
                    className={styles.icon}
                  />
                ))}
              </div>

              <div className={styles.contact}>
                  {contact.map((info, index) => (
                    <div key={index} className={styles.contactInfo}>
                      <FontAwesomeIcon icon={info.icon} />
                      <p className={styles.infoText}>{info.address}</p>
                    </div>
                  ))}
              </div>
      </div>
      </section>
    </>
  );
};

export default ContactDetails;

