import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sagar Pachode</h1>
        <p className={styles.description}>
          I am a CDAC-certified professional with hands-on experience in core
          and advanced Java, frontend and backend technologies, DBMS, software
          development, and testing. Known for my exceptional communication
          skills and commitment to surpassing project goals.
          <br />
          <br />
          With a strong foundation in programming and continuous learning, I am
          ready to deliver impactful solutions for your organization's success.
          <br />
          <br />
          Reach out to me if you like to hire me !
        </p>
        <a href="mailto:sagarpachode3@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="heroImage"
        className={styles.heroImg}
      />
    </section>
  );
};
