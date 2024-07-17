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
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iste excepturi quo quasi doloribus aperiam,
                laboriosam voluptatibus atque fuga quis dicta nesciunt iure
                praesentium, assumenda eligendi quae sed voluptates nam
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
