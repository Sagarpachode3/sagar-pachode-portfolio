import React from "react";
import frontendSkills from "../../data/skills/frontendSkills.json";
import backendskills from "../../data/skills/backendSkills.json";
import toolSkills from "../../data/skills/toolSkills.json";
import otherSkills from "../../data/skills/otherSkills.json";
import styles from "../Skills/Skills.module.css";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills </h2>
      <div className={styles.mainContainer}>
        <div className={styles.skillheadingContainer}>
          <h3 className={styles.skillsHeading}>Frontend</h3>
        </div>

        <div className={styles.skillsWrapper}>
          {frontendSkills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div
                  className={styles.skillImageContainer}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className={styles.bottom}></div> */}

      <div className={styles.mainContainer}>
        <div className={styles.skillheadingContainer}>
          <h3 className={styles.skillsHeading}>Backend</h3>
        </div>

        <div className={styles.skillsWrapper}>
          {backendskills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div
                  className={styles.skillImageContainer}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className={styles.bottom}></div> */}

      <div className={styles.mainContainer}>
        <div className={styles.skillheadingContainer}>
          <h3 className={styles.skillsHeading}>Tools</h3>
        </div>
        <div className={styles.skillsWrapper}>
          {toolSkills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div
                  className={styles.skillImageContainer}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className={styles.bottom}></div> */}

      <div className={styles.mainContainer}>
        <div className={styles.skillheadingContainer}>
          <h3 className={styles.skillsHeading}>Others</h3>
        </div>

        <div className={styles.skillsWrapper}>
          {otherSkills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div
                  className={styles.skillImageContainer}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className={styles.bottom}></div> */}
    </section>
  );
};
