import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";


const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setShowButton(window.pageYOffset > 0);
    };
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior: "smooth"});
  };

  return showButton ? (
    <button className={styles.scrollToTop} onClick={scrollToTop}>
        &#8593;
    </button>
  ) : null;
}

export default ScrollToTopButton


