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

const ContactDetails = () => {
  const socials = [faFacebookF, faLinkedinIn, faGoogle, faTwitter, faYoutube];
  const contact = [
    {
      icon: faMapMarkerAlt,
      address: "No. 8, Johnson Street, Off Coker Road, ilupeju, Lagos",
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
                      <p className={styles.p}>{info.address}</p>
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



      {/* <div style={styles.clicker} onClick={() => setOpen(!isOpen)}>
          {isOpen ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div> */}