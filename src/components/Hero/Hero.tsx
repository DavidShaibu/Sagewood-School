import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <div className={styles.pattern}>
        <h2 className={styles.supermen}>We bring up supermen!</h2>
        <h1 className={styles.kid}>Give Your Kid the Best Possible Start!</h1>
    </div>
  )
}

export default Hero