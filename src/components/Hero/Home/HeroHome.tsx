import Hero from "../Default/Hero";
import { HeroHomeInput, styles } from "./input";



const HeroHome = () => {
  return (
    <Hero styles={styles} entries={HeroHomeInput} />
  )
}

export default HeroHome