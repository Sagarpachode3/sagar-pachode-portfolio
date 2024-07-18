import React from "react";

import resume from "../../data/resume/Sagar_Pachode_Resume(PG-DAC 23).pdf";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sagar Pachode</h1>
        <p className={styles.description}>
          CDAC Certified professional (PG - DAC) having hands on experience in{" "}
          <b>Frontend</b> and <b>Backend</b> Technologies.
          <br />
          Ready to deliver impactful solutions for your organization's success.
          <br />
          <br />
          Fill free to connect, if you like to hire me !
        </p>
        <div className={styles.cntButtons}>
          <a
            href="mailto:sagarpachode3@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href={resume}
            download="Sagar_Pachode_Resume(PG-DAC 23).pdf"
            className={styles.resumeBtn}
          >
            Downlaod Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="heroImage"
        className={styles.heroImg}
      />
    </section>
  );
};
