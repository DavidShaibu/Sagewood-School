import { useState, useEffect } from "react";
import Button from "../Button";
import styles from "./AdditionalInfo.module.css";
import VisibilitySensor from "react-visibility-sensor";
import green from "../../assets/green.png";
import { ButtonProp } from "../Button";


interface Entry {
  statsIcon: string;
  statsFigure: number;
  statsDescription: string;
}

interface Props {
  entries: Entry[];
  images: string[];
  buttonProp: ButtonProp;
}

const AdditionalInfo = ({ entries, images, buttonProp }: Props) => {
  const [counters, setCounters] = useState<number[]>([]);

  useEffect(() => {
    const countToStatsFigure = (targetNumber: number, index: number) => {
      const interval = setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          const newCount = newCounters[index] + 1;
          if (newCount <= targetNumber) {
            if (newCount === targetNumber) {
              clearInterval(interval);
            }
            newCounters[index] = newCount;
          } else {
            clearInterval(interval);
          }
          return newCounters;
        });
      }, 3);
    };

    const initializeCounters = () => {
      const newCounters = entries.map(() => 0);
      setCounters(newCounters);

      entries.forEach((entry, index) => {
        countToStatsFigure(entry.statsFigure, index);
      });
    };

    initializeCounters();

  }, [entries]);




  return (
    <section className={styles.container}>
      <div
        style={{ backgroundImage: `url(${images[0]})` }}
        className={styles.admissionContainer}
      >
        <h2 className={styles.admissionHeading}>What About Admission?</h2>
        <p className={styles.admissionText}>
          Rolling! Kindergarten Tours Are Given Daily. Please Contact Us to
          Schedule an Appointment.
        </p>
        <Button
          entry={buttonProp}
        />
      </div>
      <div style={{backgroundImage: `url(${images[1]})`}} className={styles.statsContainer}>
        <div className={styles.statsContent}>
          {entries.map((entry, index) => (
            <div key={index} className={styles.statsFrame}>
              <div
                style={{ backgroundImage: `url(${entry.statsIcon})` }}
                className={styles.statsImage}
              ></div>
              <div className={styles.statsFigure}>
                 {counters[index]}
              </div>
              <div className={styles.statsText}>{entry.statsDescription}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
