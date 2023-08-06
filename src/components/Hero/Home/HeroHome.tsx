import styles from "./HeroHome.module.css";

interface Entries {
  image: string;
  h1: string;
  h2: string;
}

interface Props {
  entries: Entries[];
}

const HeroHome = ({entries}: Props) => {
  return (
    <section className={styles.HomeContainer}>
    {entries.map((entry, index) => (
      <div
        key={index}
        style={{ backgroundImage: `url(${entry.image})` }}
        className={styles.image}
      >
        <h2 className={styles.supermen}>{entry.h2}</h2>
        <h1 className={styles.kid}>{entry.h1}</h1>
      </div>
    ))}
  </section>
  )
}

export default HeroHome