import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { CSSProperties, useState } from "react";
import styles from "./ContactDetails.module.css";
import { operationDetailsInput } from "../../MainInput";

const ContactDetails = () => {
  const addressObject = operationDetailsInput.find(input => input.heading === "Location");
  const socials = [faFacebookF, faLinkedinIn, faGoogle, faTwitter, faYoutube];
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
      <div className={styles.container}>
      {/* { !isOpen && <div onClick={() => setOpen(!isOpen)} className={styles.clicker}><FontAwesomeIcon icon={faAngleDown} /></div>} */}
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
      {/* { isOpen && <div onClick={() => setOpen(!isOpen)} className={styles.clicker}><FontAwesomeIcon icon={faAngleUp} /></div>} */}
      </div>
    </>
  );
};

export default ContactDetails;

