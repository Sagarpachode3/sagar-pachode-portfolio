import React from "react";
import styles from "./Demo.module.css";
import teddy from "/teddy.png";

function Demo() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Opps ! I think you clicked on{" "}
          <span className={styles.span}>Demo</span> button. But unfortunately
          this won't be redirect you there. <br />
          But don't worry I can deploy projects for you in cloud and it will
          work definately.
        </h1>

        <div className={styles.content}>
          <img src={teddy} alt="Thank you png"  className={styles.img}/>
          <p className={styles.para}>Thank You !!!</p>
        </div>
      </div>
      ;
    </>
  );
}

export default Demo;
