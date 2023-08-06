import styles from "./WhoWeAre.module.css";

const WhoWeAre = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.writeUp}>
          <h1 className={styles.mainHeader}>Who We Are</h1>
          <p className={styles.paragraph}>
            <span className={styles.boldText}>Sagewood School</span> is a unique
            place to be, because of our unique strength, which provides warm,
            friendly and homely atmosphere for children between 2 months plus
            and 12 years old.
          </p>
          <p className={styles.paragraph}>
          It is a place where children are encouraged to
            express themselves with all their five senses, most especially,
            orally and with their hands; thereby helping each child to discover
            himself or herself early in life.
          </p>
          <p className={styles.paragraph}>
            At <span className={styles.boldText}>Sagewood School</span>, we have
            made excellence our culture. We do our daily routine with the
            consciousness of excellence, and by extension, we make it our
            pupils' goal. We believe in individual differences, so we relate
            with each child according to their uniqueness rather than as a
            member of a group.
          </p>
          <p className={styles.paragraph}>
            This has help us to reach out to every child while learning. So no
            child is left lagging behind at{" "}
            <span className={styles.boldText}>Sagewood School</span>. Hence
            children are being taught the principles behind concepts, such that
            they are able to relate with their everyday world, discuss them
            confidently and intellectually.
          </p>
          <p className={styles.paragraph}>
            At <span className={styles.boldText}>Sagewood </span>we build them
            to fit in anywhere in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
