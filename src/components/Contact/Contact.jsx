import React from "react";

import styles from "./Contact.module.css";

import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className={styles.container}
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:sagarpachode3@gmai.com">sagarpachode3@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a href="https://www.linkedin.com/in/pachodesagar3/">
            www.linkedin.com/pachodesagar3
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/Sagarpachode3">
            www.github.com/pachodesagar3
          </a>
        </li>
      </ul>
    </footer>
  );
};
