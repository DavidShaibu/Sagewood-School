import Hero from "../Default/Hero";
import styles from "./HeroHome.module.css";
import { HeroHomeInput } from "./input";



const HeroHome = () => {
  return (
    <Hero styles={styles} entries={HeroHomeInput} />
  )
}

export default HeroHome