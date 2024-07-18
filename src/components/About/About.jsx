import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="My Photo"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Trained Developer Ready to Drive Innovation</h3>
              <br />
              <br />

              <p>
                I am a dedicated and versatile developer with a PG Diploma in
                Advanced Computing, backed by rigorous training and hands-on
                experience. <br />
                <br />- <b>Fullstack Proficiency :</b> Expertise in end-to-end
                development, ensuring seamless integration between front and
                back end.
                <br />
                <br />- <b>Backend Mastery : </b>Strong foundation in server-side
                development, databases, and API integration.
                <br />
                <br />- <b>Frontend Excellence :</b> Skilled in creating
                intuitive and responsive user interfaces that enhance user
                experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
