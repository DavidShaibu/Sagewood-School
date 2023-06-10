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
import { useState } from "react";
import styles from "./GptDetails.module.css";

const GptDetails = () => {
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
      {!isOpen && (
        <div className={styles.clicker} onClick={() => setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      )}
      {isOpen && (
        <div className={styles.clicker} onClick={() => setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </>
  );
};

export default GptDetails;
