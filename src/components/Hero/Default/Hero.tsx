
import { useLocation } from "react-router-dom";
import styles from "./Hero.module.css";
import { Images } from "../index";

const Hero = () => {
  let heroImage;
  let heroHeader;
  let heroBreadCrumb;
  const location = useLocation();
  
  switch (location.pathname) {
    case "/about": 
      heroImage = Images.redBackground;
      heroHeader = "About Us";
      heroBreadCrumb = "Home / About Us";
      break;
    case "/gallery":
      heroImage = Images.greenBackground;
      heroHeader = "Gallery";
      heroBreadCrumb = "Home / Gallery";
      break;
    case "/contact-us":
      heroImage = Images.blueBackground;
      heroHeader = "Contact Us";
      heroBreadCrumb = "Home / Contact Us";
      break;
    default: 
      heroImage = Images.redBackground;
      heroHeader = "Unknown Page";
      heroBreadCrumb = "Page Not Found";
      break;
  }

  const heroInput = [
    {
      image: heroImage,
      h1: heroHeader,
      h2: heroBreadCrumb,
    },
  ];

  return (
    <>
      {heroInput.map((entry, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${entry.image})` }}
          className={styles.image}
        >
          <h1 className={styles.h1Text}>{entry.h1}</h1>
          <h2 className={styles.h2Text}>{entry.h2}</h2>
        </div>
      ))}
    </>
  );
};

export default Hero;