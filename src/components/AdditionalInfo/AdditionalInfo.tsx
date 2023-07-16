import { useState, useEffect } from "react";
import Button from "../Button";
import styles from "./AdditionalInfo.module.css";
import image1 from "./assets/diamonds.png";
import statsInput from "./input";
import VisibilitySensor from "react-visibility-sensor";


interface Entry {
  statsIcon: string;
  statsFigure: number;
  statsDescription: string;
}

interface Props {
  entries: Entry[];
}

const AdditionalInfo = ({ entries }: Props) => {
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
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className={styles.admissionContainer}
      >
        <h2 className={styles.admissionHeading}>What About Admission?</h2>
        <p className={styles.admissionText}>
          Rolling! Kindergarten Tours Are Given Daily. Please Contact Us to
          Schedule an Appointment.
        </p>
        <Button
          entry={{
            initialColor: "#00beb0",
            hoverColor: "#ef5874",
            displayText: "More Information",
          }}
        />
      </div>
      <div className={styles.statsContainer}>
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
    </div>
  );
};

export default AdditionalInfo;
