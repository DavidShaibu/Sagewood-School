import styles from "./Reviews.module.css";

interface Entry {
  name: string;
  image: string;
  text: string;
  status: string;
}

interface Props {
  entries: Entry[];
}

const Reviews = ({ entries }: Props) => {
  return (
    <section className={styles.container}>
      <h2>What Parents Say</h2>
      <div className={styles.sliderContainer}>
        { entries.map((entry, index) => (
            <div key={index}>
                <div className={styles.sliderDiv}></div>
                <p className="text">{entry.text}</p>
                <p className="name">{entry.name}</p>
                <p className="mother">{entry.status}</p>
            </div>
        )) }
      </div>
    </section>
  );
};

export default Reviews;
