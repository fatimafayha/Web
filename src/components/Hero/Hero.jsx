import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Fatima. </h1>
        <p className={styles.description}>
         I am a computer Science grad with interest in Front-End, Back-end and Machine Learning. 
        </p>
        <a href="https://docs.google.com/document/d/1cjZ015TYP6OsTk_3VilH7wfBc4Fzzf6-UPMrUmX73hw/edit?usp=drive_link" target="_blank" className={styles.resumeBtn}>
          See My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
