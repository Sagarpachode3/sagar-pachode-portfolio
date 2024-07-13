import React from 'react'

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Sagar Pachode
            </h1>
            <p className={styles.description}>
                I'm a Full-Stack developer with 1 year of experince in Java.
                Reach out to me if you like to hire me !
            </p>
            <a href="mailto:sagarpachode3@gmail.com" className={styles.contactBtn}>
            Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='heroImage'className={styles.heroImg}/>
    </section>
  )
}
